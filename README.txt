# Bookmark Cleaner — Phase II Build (v0.9)

A JavaScript-based Bookmark Cleaner tool designed to parse, scan, and analyze exported bookmark files for dead links.

This version parses a standard browser-exported bookmarks HTML file, scans each URL using fetch requests, and outputs the link status directly into the browser.

---

## 🔧 Features

- ✅ Upload browser-exported `.html` bookmark file
- ✅ Automatically parses and extracts all bookmark URLs
- ✅ Scans each link asynchronously
- ✅ Reports:
  - "Possibly Alive (No CORS)" — Browser was unable to verify due to cross-origin restrictions
  - "Dead" — Site unreachable
- ✅ Clean user interface
- ✅ Fully client-side — no server or external processing required

---

## 🔬 Technologies Used

- HTML5
- Vanilla JavaScript (async / await)
- FileReader API
- DOMParser API
- Fetch API

---

## 🚩 Current Limitations

- Browser CORS policy blocks full HTTP status detection on many external domains (displayed as "Possibly Alive (No CORS)")
- No automatic deletion or export yet (coming in v1 Enterprise build)
- Large bookmark files may trigger antivirus software due to rapid outbound URL requests (batching logic coming soon)

---

## 💡 Roadmap (Planned in Enterprise Build v1)

- ✅ Batch scanning for better performance and safety
- ✅ Auto-delete dead and No-CORS links
- ✅ Export cleaned bookmarks as new HTML file
- ✅ Error logging & reporting
- ✅ Production-grade deployment structure

---

## 🔒 Data Privacy

This tool runs fully in your browser.  
No data is sent to any server.  
Your bookmark file remains entirely local.

---

## 🔨 Author

**Thomas (Grey Knight Software)**  
Copyright (c) 2025 Couchtr26
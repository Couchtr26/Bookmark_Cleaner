Bookmark Cleaner — Phase II Build (v0.9)
A client-side JavaScript tool to parse, scan, and analyze exported browser bookmark files for dead or unreachable links.

🔧 Features
Upload exported .html bookmark files from browsers

Parse and extract all URLs using native browser APIs

Asynchronously scan each link via fetch requests

Display link status inline with:

Possibly Alive (No CORS): Unable to verify due to browser cross-origin restrictions

Dead: Site unreachable or fetch failed

Clean, minimal user interface

Fully client-side — no data sent externally

🔬 Technologies Used
HTML5, Vanilla JavaScript with async/await

FileReader API for reading local files

DOMParser API to parse bookmark HTML structure

Fetch API for URL status checks

🚩 Current Limitations
Browser CORS policies prevent definitive status checks on many domains (shown as “Possibly Alive (No CORS)”)

No automated deletion or export features yet (planned for future versions)

Large bookmark files may trigger antivirus due to many rapid fetch requests — batching to be implemented

💡 Roadmap (Enterprise Build v1)
Batch processing for safer, performant scans

Automated deletion of dead and No-CORS links

Export cleaned bookmarks as a new HTML file

Detailed error logging and user reporting

Production-ready deployment and UI enhancements

🔒 Data Privacy
All processing runs entirely in your browser.
No data is uploaded or transmitted — your bookmarks stay private and local.
---

## 🔨 Author

**Thomas (Grey Knight Software)**  
Copyright (c) 2025 Couchtr26
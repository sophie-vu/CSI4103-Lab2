    
```mermaid
sequenceDiagram
    participant browser
    participant server
    participant user

    user->>browser: the form input

    user->>browser: hits 'Save' button
        
    browser->>server: Status 200, GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: the spa file
    deactivate server
    
    browser->>server: Status 200, GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the CSS file
    deactivate server
    
    browser->>server: Status 200, GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
        
    browser->>server: Status 200, GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "User's new input", "date": "Created at" }, ... ]
    deactivate server    

    browser->>server: Status 200, GET https://studies.cs.helsinki.fi/exampleapp/favicon.ico
    activate server
    server-->>browser: the icon file
    deactivate server

    browser->>server: Status 201, POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: the new_note_spa file
    deactivate server    
```
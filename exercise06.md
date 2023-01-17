    
```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: Status 201, POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: the new_note_spa file
    deactivate server    
```
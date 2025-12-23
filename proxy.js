<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Proxy</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }
        .header {
            background: rgba(0, 0, 0, 0.3);
            padding: 20px;
            text-align: center;
            color: white;
        }
        .header h1 { font-size: 2.5em; margin-bottom: 10px; }
        .proxy-bar {
            background: rgba(255, 255, 255, 0.95);
            padding: 20px;
            margin: 20px;
            border-radius: 15px;
        }
        .url-input { display: flex; gap: 10px; }
        .url-input input {
            flex: 1;
            padding: 15px;
            border: 2px solid #667eea;
            border-radius: 10px;
            font-size: 16px;
        }
        .url-input button {
            padding: 15px 30px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
        }
        .frame-container {
            flex: 1;
            margin: 0 20px 20px 20px;
            background: white;
            border-radius: 15px;
            overflow: hidden;
        }
        iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🌐 Web Proxy</h1>
        <p>Browse any website</p>
    </div>

    <div class="proxy-bar">
        <div class="url-input">
            <input type="text" id="urlInput" placeholder="Enter URL (e.g., example.com)">
            <button onclick="loadUrl()">GO</button>
        </div>
    </div>

    <div class="frame-container">
        <iframe id="proxyFrame" src="about:blank"></iframe>
    </div>

    <script>
        function loadUrl() {
            const input = document.getElementById('urlInput');
            let url = input.value.trim();
            
            if (!url) return;
            
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                url = 'https://' + url;
            }
            
            // Use your Vercel proxy endpoint
            const proxyUrl = '/api/proxy?url=' + encodeURIComponent(url);
            document.getElementById('proxyFrame').src = proxyUrl;
        }
        
        document.getElementById('urlInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                loadUrl();
            }
        });
    </script>
</body>
</html>

function generateOtp(){
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function getOtpHtml(otp){
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>OTP Verification</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f2f2f2;
                margin: 0;
                padding: 0;
                text-align: center;
            }
            
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
            }
            
            .title {
                font-size: 24px;
                margin-bottom: 20px;
            }
            
            .otp {
                font-size: 48px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            
            .instructions {
                font-size: 16px;
                margin-bottom: 20px;
            }
            
            .button {
                display: inline-block;
                background-color: #007bff;
                color: #fff;
                padding: 10px 20px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
            
            .button:hover {
                background-color: #0056b3;
            }
            
            .button:active {
                background-color: #0056b3;
                box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1 class="title">OTP Verification</h1>
            <p class="otp">${otp}</p>
            <p class="instructions">Please enter the OTP provided to verify your account.</p>
            <button class="button">Verify</button>
        </div>
    </body>
    </html>`;
}

export { generateOtp, getOtpHtml };
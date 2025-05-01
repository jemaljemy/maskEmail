function maskEmail(email) {
    if (!email || typeof email !== "string" || email.indexOf("@") ===-1) {
      return "Invalid email format"
    }
  
    const parts = email.split("@");
    const username = parts[0];
    const domain = parts[1];
    if (username.length <= 3 ){
      return username + "@" + domain; 
    }
    const startIndex =  1;
    const endIndex = username.length - 1 ;
    const numToMask = endIndex - startIndex + 1;
    const replacement = "*".repeat(numToMask);
    const maskingUsername = username.substring(0,startIndex) + replacement + username.substring(endIndex);
    return maskingUsername + "@" + domain ;
  }

  const email1 = "jlaqdiem@gmail.com";
  const maskedEmail = maskEmail(email1);
  console.log(maskedEmail); // Output: "j*******m@gmail.com"

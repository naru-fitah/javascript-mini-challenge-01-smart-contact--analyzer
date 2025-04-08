// 🔁 Mini-Challenge: Smart Contact Analyzer

// You are given an array of contacts. Each contact is an object with a "name" and an "email".

let contacts = [
    { name: "Anna", email: "anna@email.com" },
    { name: "Bob", email: "bob@website.org" },
    { name: "Clara", email: "clara@email.com" },
  ];


  
  // ✅ Your Task:
  // 1. Loop through the contacts array
  // 2. For each contact:
  //    - Check if the email is valid (contains "@" and ends with ".com")
  //    - If it's valid, create a greeting: "Hello, [name]! Your email looks good."
  // 3. Store all greetings in a new array
  // 4. Count how many valid emails there are
  // 5. Return an object with two properties:
  //    - greetings: array of greeting messages
  //    - validEmailCount: number of valid emails

  function analyzeContact(arr) {
    
    let result = {
        greetings: [],
        validEmailCount: 0
      }; 

   

    for (let i = 0; i < arr.length; i++) {
        let contact = arr[i]
        let greetingMessage = "Hello, " + contact.name + "! Your email looks good."
        
        if (contact.email.includes("@") && contact.email.endsWith(".com")) {
            result.greetings.push(greetingMessage)  
            result.validEmailCount++
        }
        
    }

    return result

  }

  console.log(analyzeContact(contacts))
  
  // 🧪 Expected Output:
  /// {
  ///   greetings: [
  ///     "Hello, Anna! Your email looks good.",
  ///     "Hello, Clara! Your email looks good."
  ///   ],
  ///   validEmailCount: 2
  /// }
  

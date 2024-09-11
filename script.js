const responses = {
    "hii": "Hi there! I'm a virtual version of Pulletikurti Naga Sai Venkata Dakshaini. I can tell you all about her professional skills, projects, internships, and more. Ask Tell me about Dakshaini",
    "hello": "Hi there! I'm a virtual version of Pulletikurti Naga Sai Venkata Dakshaini. I can tell you all about her professional skills, projects, internships, and more.Ask Tell me about Dakshaini",
    "how are you": "I'm just a bot, but I'm here to help you!",
    "need help": "How can I assist you with your resume or career details?",
    "bye": "Goodbye! Have a great day!",
    "default": "I'm sorry, I didn't understand that try asking Tell me about her skills/certifications/internships or what would you like to ask something else about Dakshaini's professional profile?",
    
    "want to know about dakshaini?": "I am Dakshaini's virtual assistant. I can help you learn about her projects, skills, education, or internships. What would you like to know?",
    
    "tell me about dakshaini": "Pulletikurti Naga Sai Venkata Dakshaini is a determined undergraduate specializing in Artificial Intelligence and Machine Learning, with experience in projects, internships, and certifications in cloud and networking.",
    
    "what projects has dakshaini worked on?": "She has worked on projects such as 'Customer Segmentation using K-Means', 'Automatic College Timetable Generator', and 'Network Security Enhancement using ACLs'.",
    "tell me about her customer segmentation project": "In the Customer Segmentation project, Dakshaini utilized K-Means clustering to segment mall customers. She performed data processing, feature selection, and applied the K-Means algorithm. Results were visualized using Bar Plots, Line Graphs, and other charts.",
    "describe her automatic college timetable generator project": "This project involves a web application that generates university timetables without clashes. Developed using a Genetic Algorithm, it was built with Python and Django for the backend, and HTML, CSS, JavaScript for the frontend. MySQL was used for the database.",
    "tell me about her network security project": "In the Network Security project, Dakshaini led a team using Cisco Packet Tracer to enhance network security. She configured ACLs to manage network traffic, ensuring authorized access and protecting against unauthorized attempts.",
    
    "what internships has dakshaini completed?": "Dakshaini completed the following internships: 1. Salesforce Developer at SmartBridge (May - July 2024). 2. Networking at Juniper Networks Cloud and Automation Academy (January - March 2024). 3. Cloud at AWS Academy (September - November 2023). 4. Cybersecurity at Paloalto Networks (December 2022 - February 2023).",
    
    "what skills does dakshaini have?": "Her skills include Python, Data Structures and Algorithms, basic Java, R Programming, and C. She is also proficient in web development with HTML5, CSS3, JavaScript, ReactJS, Node JS, and Django, and has experience with database management (MySQL, PL/SQL, MongoDB) and tools like Cisco Packet Tracer and MS Office.",
    "tell me about her cloud internship": "During her Cloud Internship at AWS Academy (September - November 2023), Dakshaini learned about cloud foundations and web application building using AWS services.",
    "what networking experience does she have?": "Dakshaini's Networking Internship at Juniper Networks involved cloud and automation, where she developed skills in network configuration and automation systems.",
    "tell me about her cybersecurity experience": "In her Cybersecurity Virtual Internship at Paloalto Networks, Dakshaini focused on network security and firewall configuration to prevent cyber threats.",
    "what programming languages does dakshaini know?": "Dakshaini is proficient in Python, R, and basic Java, and has experience in C and Data Structures and Algorithms.",
    
    "how does she excel academically?": "Dakshaini is pursuing a Bachelor of Technology in Computer Science with a specialization in Artificial Intelligence and Machine Learning at VVIT, Nambur, with a CGPA of 8.79. She also completed a Diploma in Electronics and Communication Engineering with a score of 93.5%.",
    "what is dakshaini's academic background?": "Dakshaini is currently pursuing a B.Tech in Computer Science and AI at VVIT, Guntur. She completed her Diploma in Electronics and Communication Engineering with distinction.",
    
    "tell me about her certifications": "Dakshaini holds certifications including: 1. Microsoft Certified Azure Data Scientist Associate. 2. AWS Academy Graduate - Cloud Web Application Builder, Cloud Foundations, and Cloud Architecting. 3. Google Data Analytics Professional Certificate. 4. React JS and MongoDB certifications from Great Learning. 5. HTML, JavaScript, CSS certifications from Great Learning. 6. Introduction to Prompt Engineering.",
    
    "what are her extracurricular activities?": "Dakshaini is proficient in classical dance forms like Bharatanatyam and Kuchipudi. She participated in 'Jathiya Samaikhya Nrutyostavam' and achieved the Telugu World Record.",
    
    "what languages does dakshaini speak?": "Dakshaini speaks Telugu, English, Hindi, and has beginner-level knowledge of Japanese.",
    
    "what are her strengths?": "Her strengths include Accountability, Industriousness, Multi-tasking, Social Intelligence, and a high Adversity Quotient."
};

const regexResponses = [
    { regex: /hello/i, response: responses["hello"] },
    { regex: /how are you/i, response: responses["how are you"] },
    { regex: /need help/i, response: responses["need help"] },
    { regex: /bye/i, response: responses["bye"] },
    { regex: /tell me about dakshaini/i, response: responses["tell me about dakshaini"] },
    { regex: /tell me about her projects/i, response: responses["what projects has dakshaini worked on?"] },
    { regex: /tell me about her customer segmentation project/i, response: responses["tell me about her customer segmentation project"] },
    { regex: /tell me about her automatic college timetable generator project/i, response: responses["describe her automatic college timetable generator project"] },
    { regex: /tell me about her network security project/i, response: responses["tell me about her network security project"] },
    { regex: /tell me about her internships/i, response: responses["what internships has dakshaini completed?"] },
    { regex: /tell me about her skills/i, response: responses["what skills does dakshaini have?"] },
    { regex: /tell me about her cloud internship/i, response: responses["tell me about her cloud internship"] },
    { regex: /tell me about her networking experience/i, response: responses["what networking experience does she have?"] },
    { regex: /tell me about her cybersecurity experience/i, response: responses["tell me about her cybersecurity experience"] },
    { regex: /tell me about her programming languages/i, response: responses["what programming languages does dakshaini know?"] },
    { regex: /tell me about her academics/i, response: responses["how does she excel academically?"] },
    { regex: /tell me about her academic background/i, response: responses["what is dakshaini's academic background?"] },
    { regex: /tell me about her certifications/i, response: responses["tell me about her certifications"] },
    { regex: /tell me about her extracurricular activities/i, response: responses["what are her extracurricular activities?"] },
    { regex: /tell me about her languages/i, response: responses["what languages does dakshaini speak?"] },
    { regex: /tell me about her strengths/i, response: responses["what are her strengths?"] },
    { regex: /.+/i, response: responses["default"] }
];


document.getElementById('chatbot-toggle-btn').addEventListener('click', toggleChatbot);
document.getElementById('close-btn').addEventListener('click', toggleChatbot);
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Starting the chatbot conversation
window.onload = function() {
    appendMessage('bot', "Hi there! I'm a virtual version of Pulletikurti Naga Sai Venkata Dakshaini. I can tell you about her professional aspects. If you'd like to know more about her, you can ask about her 'skills', 'projects', 'certifications', or 'academics'.");
};

function toggleChatbot() {
    const chatbotPopup = document.getElementById('chatbot-popup');
    chatbotPopup.style.display = chatbotPopup.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput !== '') {
        appendMessage('user', userInput);
        respondToUser(userInput.toLowerCase());
        document.getElementById('user-input').value = '';
    }
}

function respondToUser(userInput) {
    let responseFound = false;

    // Check if userInput matches any regex pattern
    for (const item of regexResponses) {
        const match = item.regex.exec(userInput);
        if (match) {
            const response = typeof item.response === 'function' ? item.response(match) : item.response;
            setTimeout(function () {
                appendMessage('bot', response);
            }, 500);
            responseFound = true;
            break;
        }
    }

    // If no regex match found, fall back to default response
    if (!responseFound) {
        setTimeout(function () {
            appendMessage('bot', responses["default"]);
        }, 500);
    }
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

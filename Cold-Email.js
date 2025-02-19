function sendEmails() {
  const emails = [
    "youdemonia.org@gmail.com",

    //PASTE LIST IN THE LINES BELOW 



  ];

  //FIX STATE (Subject, MI --> __) AND OPENER (Good "Morning" or "Afternoon")
  var subject = "Help Us Connect MI's Youth to Your Organization's Network!";
  var body = `
    <p>Good Morning!</p>
    <p>My name is James Susanto, and I am the COO of a student-led nonprofit organization called Youdemonia. 
    Our organization promotes opportunity awareness and combats social disparities by creating community events centered around youth engagement. 
    In the past, we have organized educational opportunities for the youth in Metro-Detroit, like the Youth Career Symposium sponsored by The Huntington Bank 
    and The College Admissions Webinar in collaboration with The University of Chicago.</p>

    <p>Today, thousands of youth-focused academic resources are offered annually, yet many students fail to utilize them because they do not know they exist. 
    In light of this, Youdemonia is building YouConnect - an online "one-stop shop" where students can find a variety of events, workshops, and other career-building opportunities without all the hassle.</p>

    <p>Your organization caught my eye as one of the amazing organizations leading the charge to empower youth and get students more engaged with learning 
    and overall development in your community, and I would love to see how we can work together to push your resources out to more youth through our platform!</p>

    <p>If your team is interested in engaging more students, I would love to chat with you when you are available.</p>

    <p>Looking forward to hearing from you,<br>
    James Susanto<br>
    COO of Youdemonia<br>
    <a href="https://youdemoniaorg.wixsite.com/live">www.youdemonia.org</a></p>
  `;

  for (var i = 0; i < emails.length; i++) {
    MailApp.sendEmail({
      to: emails[i],
      subject: subject,
      htmlBody: body,  // Use htmlBody instead of body
    });
  }
  return ContentService.createTextOutput("Emails sent successfully");
}

function doGet() {
  return sendEmails();
}

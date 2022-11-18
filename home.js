function Home(){ 
  const ctx = React.useContext(UserContext);
  const name = ctx.users[0].name;
  const email = ctx.users[0].email;

  const greetMessage = "Home Page";
  const welcomeMessage = "Welcome to the Bank!";
  const textMessage ="Thanks for choosing Bad Bank 💰 for all of your banking needs!";
  

  return (
    <div className="container">
      <Card 
        bgcolor="light"
        txtcolor="black"
        header={greetMessage}
        title={welcomeMessage}
        text={textMessage}
        body={(<img src="Artboard 1.png" className="img-fluid" alt="Responsive image"/>)}
      />  
    </div>



  );
}
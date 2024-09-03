import React from 'react';

function Header() {
  return <h1>This is the header</h1>;
}

function Footer() {
  return <p>This is the footer</p>;
}

function Page() {
  return (
    <div className='page'>
      <Header />  {/* Adding the Header component */}
      <p>This is the main content of the page.</p>
      <Footer />  {/* Adding the Footer component */}
    </div>
  );
}


// Export the component to use it in other parts of your app
export default Page;

import React from 'react'
import Header from './Header'
import Footer from './footer'

function Cancilationpolicy() {
  return (
    <div>
      <Header/>
      <div style={{ 
  padding: "40px", 
  backgroundColor: "#fcf7ee", 
  marginTop: "9rem", 
  marginLeft: "100px", 
  marginRight: "100px", 
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", 
  borderRadius: "10px" 
}}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#333", fontFamily:"'ITC Modern No 216', serif" }}>
        Cancellation and Return Policy for Kiona
      </h1>

      <section>
        <h4 style={{ color: "#333" , fontFamily:"'ITC Modern No 216', serif" }}>1. Introduction</h4>
        <p style={{fontFamily:"'Harmonia Sans', sans-serif"}}>
          At Kiona, we are committed to ensuring your satisfaction with our products. If for any reason you are not completely satisfied with your purchase, our Cancellation and Return Policy allows you to request a return or cancellation within the stipulated time frame under certain conditions.
        </p>
      </section>

      <section>
        <h4 style={{ color: "#333" , fontFamily:"'ITC Modern No 216', serif" }}>2. Cancellation Policy</h4>
        <p style={{fontFamily:"'Harmonia Sans', sans-serif"}}>
          We understand that sometimes plans change. If you wish to cancel an order, you can do so under the following conditions:
        </p>
        <ul>
          <li style={{fontFamily:"'Harmonia Sans', sans-serif"}}>Orders can be canceled before they have been shipped.</li>
          <li style={{fontFamily:"'Harmonia Sans', sans-serif"}}>If the order has already been shipped, it cannot be canceled, but you may initiate a return once you receive the product.</li>
          <li style={{fontFamily:"'Harmonia Sans', sans-serif"}}>To cancel an order, please contact our customer service team within 24 hours of placing the order.</li>
        </ul>
        <p style={{fontFamily:"'Harmonia Sans', sans-serif"}}>
          To cancel an order, please reach out to us at <strong>support@kiona.com</strong> or call us at <strong>+123 456 7890</strong>.
        </p>
      </section>

      <section>
        <h4 style={{ color: "#333", fontFamily:"'ITC Modern No 216', serif" }}>3. Return Policy</h4>
        <p style={{fontFamily:"'Harmonia Sans', sans-serif"}}>
          We want you to love your Kiona products, but if you are not satisfied with your purchase, we offer a return policy with the following conditions:
        </p>
        <ul>
          <li style={{fontFamily:"'Harmonia Sans', sans-serif"}}>Returns are accepted within 30 days from the date of delivery.</li>
          <li style={{fontFamily:"'Harmonia Sans', sans-serif"}}>To be eligible for a return, the product must be unused, unopened, and in the same condition as when you received it, with all original packaging intact.</li>
          <li style={{fontFamily:"'Harmonia Sans', sans-serif"}}>If the product was damaged or defective upon delivery, please notify us immediately and we will arrange for a free return and replacement.</li>
          <li style={{fontFamily:"'Harmonia Sans', sans-serif"}}>Returns are subject to inspection by our quality control team before the refund or exchange is processed.</li>
        </ul>
        <p style={{fontFamily:"'Harmonia Sans', sans-serif"}}>
          To initiate a return, please contact our customer support team at <strong>support@kiona.com</strong> or call us at <strong>+123 456 7890</strong>.
        </p>
      </section>

      <section>
        <h4 style={{ color: "#333" , fontFamily:"'ITC Modern No 216', serif" }}>4. Refund Process</h4>
        <p style={{fontFamily:"'Harmonia Sans', sans-serif"}}>
          Once the return is processed and approved, a refund will be issued to your original method of payment. Please note the following:
        </p>
        <ul>
          <li style={{fontFamily:"'Harmonia Sans', sans-serif"}}>Refunds will be processed within 7-10 business days after we receive and inspect the returned item.</li>
          <li style={{fontFamily:"'Harmonia Sans', sans-serif"}}>Shipping costs are non-refundable, and the return shipping cost may be borne by the customer, unless the product is damaged or defective.</li>
          <li style={{fontFamily:"'Harmonia Sans', sans-serif"}}>If the product was purchased through a third-party platform, the return and refund process may differ based on the platform’s policies.</li>
        </ul>
      </section>

      <section>
        <h4 style={{ color: "#333" , fontFamily:"'ITC Modern No 216', serif" }}>5. Non-Returnable Items</h4>
        <p style={{fontFamily:"'Harmonia Sans', sans-serif"}}>
          Please note that the following items are non-returnable:
        </p>
        <ul>
          <li style={{fontFamily:"'Harmonia Sans', sans-serif"}}>Used or opened skincare products.</li>
          <li style={{fontFamily:"'Harmonia Sans', sans-serif"}}>Personalized or custom products.</li>
          <li style={{fontFamily:"'Harmonia Sans', sans-serif"}}>Items purchased through promotions or discounts may have specific return conditions outlined in the offer terms.</li>
        </ul>
      </section>

      <section>
        <h4 style={{ color: "#333" , fontFamily:"'ITC Modern No 216', serif" }}>6. Exchanges</h4>
        <p style={{fontFamily:"'Harmonia Sans', sans-serif"}}>
          We do not offer direct exchanges. If you would like a different product, you must return the original item and place a new order for the desired item.
        </p>
      </section>

      <section>
        <h4 style={{ color: "#333" , fontFamily:"'ITC Modern No 216', serif" }}>7. How to Contact Us</h4>
        <p style={{fontFamily:"'Harmonia Sans', sans-serif"}}>
          If you have any questions or concerns regarding the cancellation or return of your order, please contact our customer support team:
        </p>
        <p style={{fontFamily:"'Harmonia Sans', sans-serif"}}>Email: <strong>support@kiona.com</strong></p>
        <p style={{fontFamily:"'Harmonia Sans', sans-serif"}}>Phone: <strong>+123 456 7890</strong></p>
        <p style={{fontFamily:"'Harmonia Sans', sans-serif"}}>We are available Monday to Friday, from 9:00 AM to 6:00 PM.</p>
      </section>
    </div>
    <Footer/>
    </div>
  )
}

export default Cancilationpolicy
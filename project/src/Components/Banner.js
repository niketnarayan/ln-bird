import React from 'react'
import './Banner.css';
import { Carousel, Card, Button } from 'react-bootstrap';

function Banner() {
  return (
    <>
    <div className='container' style={{marginTop:"8rem"}}>
        <div className='row'>
            <div className='col'>
                {/* <div>
                <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1727951285140.jpeg' alt='banner'className='img-fluid'></img>
                </div> */}
                {/* <div>
                    <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1727951461854.jpeg' alt='banner'className='img-fluid'></img>
                </div> */}
{/* slider banner---------------------------------------------------------------- */}

{/* slider banner end-------------------------------------------------------------- */}
            </div>
        </div>
    </div>
    
    {/*  offer section image start----------------------------------------------------------------------------  */}

       <div className='container' style={{padding:"2rem"}}>
        <div className='row'>
          <div className='col-md-6'>
             <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1727951794578.jpeg' alt='.....'className='img-fluid'></img>
          </div>
          <div className='col-md-6'>
             <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1727951795181.jpeg' alt='....'className='img-fluid'></img>
          </div>
        </div>

        <div className='row'> 
          <div className='col-md-6'>
            <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1727951795840.jpeg' alt='....'className='img-fluid'></img>

          </div>
          <div className='col-md-6'>
            <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1727951796363.jpeg' alt='...'className='img-fluid'></img>
          </div>

        </div>


       </div>


    {/* offer section image end--------------------------------------------------------------------------------- */}
    
    {/* price range banner start---------------------------------------------------------------------------- */}
   
      {/* -------------------------------------------------------------------------------------------------------- */}

      <div className="container ">
            <h2 className="text-center mb-4">Add fresh to cart</h2>
            <Carousel className='second-carousel' indicators={false}>
                {/* Slide 1 */}
                <Carousel.Item>
                    <div className="d-flex flex-wrap">
                        {/* Product Card 1 */}
                        <Card className="product-card mx-2 my-2">
                            <Card.Img variant="top" src="http://surl.li/bsvguq" alt="Apple" />
                            <Card.Body className="text-center">
                                <Card.Title className="card-title"> Apple </Card.Title>
                                <Card.Text>1 PCS</Card.Text>
                                <p className="price">₹189</p>
                                <div style={{ display: "flex", alignItems: "center", backgroundColor: "red", height: "40px", borderRadius: "5px",width:"7rem"}}>
                    <button className="btn">
                      <i className="bi bi-cart-fill" style={{ fontSize: "22px", color: "white" }}></i>
                    </button>
                    <div>
                      <span style={{ fontSize: "9px", fontWeight: "bold", color: "white" }}>Add to Cart</span>
                    </div>
                  </div>
                            </Card.Body>
                        </Card>
                        
                        {/* Product Card 2 */}
                        <Card className="product-card mx-2 my-2">
                            <Card.Img variant="top" src="http://surl.li/oalbxp" alt="Blueberry" />
                            <Card.Body className="text-center">
                                <Card.Title className="card-title">Blueberry</Card.Title>
                                <Card.Text>1 PCS</Card.Text>
                                <p className="price">₹239</p>
                                <div style={{ display: "flex", alignItems: "center", backgroundColor: "red", height: "40px", borderRadius: "5px",width:"7rem"}}>
                    <button className="btn">
                      <i className="bi bi-cart-fill" style={{ fontSize: "22px", color: "white" }}></i>
                    </button>
                    <div>
                      <span style={{ fontSize: "9px", fontWeight: "bold", color: "white" }}>Add to Cart</span>
                    </div>
                  </div>
                            </Card.Body>
                        </Card>

                        {/* Product Card 3 */}
                        <Card className="product-card mx-2 my-2">
                            <Card.Img variant="top" src="http://surl.li/hbjlek" alt="Kiwi" />
                            <Card.Body className="text-center">
                                <Card.Title className="card-title">Kiwi</Card.Title>
                                <Card.Text>1 PCS</Card.Text>
                                <p className="price">₹109</p>
                                <div style={{ display: "flex", alignItems: "center", backgroundColor: "red", height: "40px", borderRadius: "5px",width:"7rem"}}>
                    <button className="btn">
                      <i className="bi bi-cart-fill" style={{ fontSize: "22px", color: "white" }}></i>
                    </button>
                    <div>
                      <span style={{ fontSize: "9px", fontWeight: "bold", color: "white" }}>Add to Cart</span>
                    </div>
                  </div>
                            </Card.Body>
                        </Card>

                        {/* Product Card 4 */}
                        <Card className="product-card mx-2 my-2">
                            <Card.Img variant="top" src="http://surl.li/gxppev" alt="Papaya" />
                            <Card.Body className="text-center">
                                <Card.Title className="card-title">Papaya Raw</Card.Title>
                                <Card.Text>500 GM</Card.Text>
                                <p className="price">₹26</p>
                                <div style={{ display: "flex", alignItems: "center", backgroundColor: "red", height: "40px", borderRadius: "5px",width:"7rem"}}>
                    <button className="btn">
                      <i className="bi bi-cart-fill" style={{ fontSize: "22px", color: "white" }}></i>
                    </button>
                    <div>
                      <span style={{ fontSize: "9px", fontWeight: "bold", color: "white" }}>Add to Cart</span>
                    </div>
                  </div>
                            </Card.Body>
                        </Card>
                        
                        {/* Product Card 5 */}
                        <Card className="product-card mx-2 my-2">
                            <Card.Img variant="top" src="http://surl.li/wtjdax" alt="Aloe Vera" />
                            <Card.Body className="text-center">
                                <Card.Title className="card-title">Aloevera</Card.Title>
                                <Card.Text>1 PCS</Card.Text>
                                <p className="price">₹38</p>
                                <div style={{ display: "flex", alignItems: "center", backgroundColor: "red", height: "40px", borderRadius: "5px",width:"7rem"}}>
                    <button className="btn">
                      <i className="bi bi-cart-fill" style={{ fontSize: "22px", color: "white" }}></i>
                    </button>
                    <div>
                      <span style={{ fontSize: "9px", fontWeight: "bold", color: "white" }}>Add to Cart</span>
                    </div>
                  </div>
                            </Card.Body>
                        </Card>

                        {/* Product Card 6 */}
                        <Card className="product-card mx-2 my-2">
                            <Card.Img variant="top" src="http://surl.li/wzdvac" alt="Beans Bush" />
                            <Card.Body className="text-center">
                                <Card.Title className="card-title">Beans Bush</Card.Title>
                                <Card.Text>250 GM</Card.Text>
                                <p className="price">₹16.5</p>
                                <div style={{ display: "flex", alignItems: "center", backgroundColor: "red", height: "40px", borderRadius: "5px",width:"7rem"}}>
                    <button className="btn">
                      <i className="bi bi-cart-fill" style={{ fontSize: "22px", color: "white" }}></i>
                    </button>
                    <div>
                      <span style={{ fontSize: "9px", fontWeight: "bold", color: "white" }}>Add to Cart</span>
                    </div>
                  </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel.Item>


                <Carousel.Item>
                    <div className="d-flex flex-wrap ">
                        {/* Product Card 7 */}
                        <Card className="product-card mx-2 my-2">
                            <Card.Img variant="top" src="http://surl.li/jnyxmc" alt="Apple" />
                            <Card.Body className="text-center">
                                <Card.Title className="card-title">Persimon</Card.Title>
                                <Card.Text>1 PCS</Card.Text>
                                <p className="price">₹189</p>
                                <div style={{ display: "flex", alignItems: "center", backgroundColor: "red", height: "40px", borderRadius: "5px",width:"7rem"}}>
                    <button className="btn">
                      <i className="bi bi-cart-fill" style={{ fontSize: "22px", color: "white" }}></i>
                    </button>
                    <div>
                      <span style={{ fontSize: "9px", fontWeight: "bold", color: "white" }}>Add to Cart</span>
                    </div>
                  </div>
                            </Card.Body>
                        </Card>
                        
                        {/* Product Card 8 */}
                        <Card className="product-card mx-2 my-2">
                            <Card.Img variant="top" src="http://surl.li/katknn" alt="Blueberry" />
                            <Card.Body className="text-center">
                                <Card.Title className="card-title">Orange mini</Card.Title>
                                <Card.Text>1 PCS</Card.Text>
                                <p className="price">₹239</p>
                                <div style={{ display: "flex", alignItems: "center", backgroundColor: "red", height: "40px", borderRadius: "5px",width:"7rem"}}>
                    <button className="btn">
                      <i className="bi bi-cart-fill" style={{ fontSize: "22px", color: "white" }}></i>
                    </button>
                    <div>
                      <span style={{ fontSize: "9px", fontWeight: "bold", color: "white" }}>Add to Cart</span>
                    </div>
                  </div>
                            </Card.Body>
                        </Card>

                        {/* Product Card 9 */}
                        <Card className="product-card mx-2 my-2">
                            <Card.Img variant="top" src="http://surl.li/cteorv" alt="Kiwi" />
                            <Card.Body className="text-center">
                                <Card.Title className="card-title">Drigon fruits</Card.Title>
                                <Card.Text>1 PCS</Card.Text>
                                <p className="price">₹109</p>
                                <div style={{ display: "flex", alignItems: "center", backgroundColor: "red", height: "40px", borderRadius: "5px",width:"7rem"}}>
                    <button className="btn">
                      <i className="bi bi-cart-fill" style={{ fontSize: "22px", color: "white" }}></i>
                    </button>
                    <div>
                      <span style={{ fontSize: "9px", fontWeight: "bold", color: "white" }}>Add to Cart</span>
                    </div>
                  </div>
                            </Card.Body>
                        </Card>

                        {/* Product Card 10 */}
                        <Card className="product-card mx-2 my-2">
                            <Card.Img variant="top" src="http://surl.li/utebez" alt="Papaya" />
                            <Card.Body className="text-center">
                                <Card.Title className="card-title">Pear</Card.Title>
                                <Card.Text>500 GM</Card.Text>
                                <p className="price">₹26</p>
                                <div style={{ display: "flex", alignItems: "center", backgroundColor: "red", height: "40px", borderRadius: "5px",width:"7rem"}}>
                    <button className="btn">
                      <i className="bi bi-cart-fill" style={{ fontSize: "22px", color: "white" }}></i>
                    </button>
                    <div>
                      <span style={{ fontSize: "9px", fontWeight: "bold", color: "white" }}>Add to Cart</span>
                    </div>
                  </div>
                            </Card.Body>
                        </Card>
                        
                        {/* Product Card 11 */}
                        <Card className="product-card mx-2 my-2">
                            <Card.Img variant="top" src="http://surl.li/ysfcyp" alt="Aloe Vera" />
                            <Card.Body className="text-center">
                                <Card.Title className="card-title">Avocado</Card.Title>
                                <Card.Text>1 PCS</Card.Text>
                                <p className="price">₹38</p>
                                <div style={{ display: "flex", alignItems: "center", backgroundColor: "red", height: "40px", borderRadius: "5px",width:"7rem"}}>
                    <button className="btn">
                      <i className="bi bi-cart-fill" style={{ fontSize: "22px", color: "white" }}></i>
                    </button>
                    <div>
                      <span style={{ fontSize: "9px", fontWeight: "bold", color: "white" }}>Add to Cart</span>
                    </div>
                  </div>
                            </Card.Body>
                        </Card>

                        {/* Product Card 12 */}
                        <Card className="product-card mx-2 my-2">
                            <Card.Img variant="top" src="http://surl.li/redpda" alt="Beans Bush" />
                            <Card.Body className="text-center">
                                <Card.Title className="card-title">Sitaphal</Card.Title>
                                <Card.Text>250 GM</Card.Text>
                                <p className="price">₹16.5</p>
                                <div style={{ display: "flex", alignItems: "center", backgroundColor: "red", height: "40px", borderRadius: "5px",width:"7rem"}}>
                    <button className="btn">
                      <i className="bi bi-cart-fill" style={{ fontSize: "22px", color: "white" }}></i>
                    </button>
                    <div>
                      <span style={{ fontSize: "9px", fontWeight: "bold", color: "white" }}>Add to Cart</span>
                    </div>
                  </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel.Item>



                {/* Add more slides here if needed */}
            </Carousel>
        </div>
      

    {/* price range banner end---------------------------------------------------------------------------------- */}
    
    {/* --------------------------------------------------------------------------------------------------------- */}
     <div className='container'>
      <div className='row'>
        <div className='col'>
           <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1728642693623.jpeg' alt='...' className='img-fluid'></img>
        </div>
        </div> 
        </div>
          
        <div className='container'>
        <div className='row'>
          <div className='col'>
            <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1713416531830.jpeg' alt='...'className='img-fluid'></img>
          </div>

        </div>
        </div>

        <div className='container'>
        <div className='row'>
          <div className='col'>
            <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1730090840815.jpeg' alt='...'className='img-fluid'></img>
          </div>

        </div>
        </div>


        <div className='container'>
        <div className='row'>
          <div className='col'>
            <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1729488319339.png' alt='...'className='img-fluid'></img>
          </div>
        </div>
        </div>

        <div className='container'>
        <div className='row'>
          <div className='col'>
            <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1724841840561.jpeg' alt='...'className='img-fluid'></img>
          </div>
        </div>
        </div>
   
    
    {/* ---------------------------------------------------------------------------------------------------------- */}
    
    
    </>
  )
}

export default Banner
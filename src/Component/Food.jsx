import { Ampersand, ArrowUpFromDot, BookmarkCheck, Dot, Facebook, Instagram, MessageSquareMore, Pilcrow, Search, SearchCheck, Star, UserRound, Youtube } from "lucide-react";

export function Food() {
  return (
<>


     <nav className="navbar">
    <h1 className="logo">Food<Dot  className="Dot"/></h1>
    <ul>
      <li>Recipes</li>
      <li>Popular</li>
      <li>Meat & Seafood</li>
      <li>Healthy & Diet</li>
      <li>Holidays</li>
      <li>Cuisine</li>
      <li>Seasonal</li>
      <Search/><BookmarkCheck/> <UserRound />
    </ul>
  </nav>
   
{/* <!-- ================= TOP SECTION ================= --> */}
<section className="top-section">
  <h2>Top 100 Five-Ingredient Dinners</h2>
  <button>See Them All</button>
</section>
<div className="section-header">
    <h2>Fresh from Our Community</h2>
    <a href="#">View All</a>
  </div>
{/* sections2 */}
<section className="Shrimp ">
  

    <div className="community-card">
    <div className="meta">
      <div className="avatar">
        <img src="src/assets/images22.jpg" alt="" className="profile" />
      </div>
      <div>
        <div className="username">Bobbyinsd76</div>
        <div className="recipe-ref">Brazilian Shrimp Stew</div>
      </div>
    </div>
    <p>Délicieux mais je ne ferais pas mariner les crevettes 20 min. J'omettrai le jus de citron (il cuit les crevettes). Mariner juste avec sel, poivre et ail. Nous avons ajouté des moules et des palourdes.</p>
    <span className="time">il y a 7h</span>
    <button className="reply-btn">Répondre</button>
  </div>
    <div className="community-card">
    <div className="meta">
      <div className="avatar">
        <img src="src/assets/images22.jpg" alt="" className="profile" />
      </div>
      <div>
        <div className="username">Bobbyinsd76</div>
        <div className="recipe-ref">Brazilian Shrimp Stew</div>
      </div>
    </div>
    <p>Délicieux mais je ne ferais pas mariner les crevettes 20 min. J'omettrai le jus de citron (il cuit les crevettes). Mariner juste avec sel, poivre et ail. Nous avons ajouté des moules et des palourdes.</p>
    <span className="time">il y a 7h</span>
    <button className="reply-btn">Répondre</button>
  </div>
    <div className="community-card">
    <div className="meta">
      <div className="avatar">
        <img src="src/assets/images22.jpg" alt="" className="profile" />
      </div>
      <div>
        <div className="username">Bobbyinsd76</div>
        <div className="recipe-ref">Brazilian Shrimp Stew</div>
      </div>
    </div>
    <p>Délicieux mais je ne ferais pas mariner les crevettes 20 min. J'omettrai le jus de citron (il cuit les crevettes). Mariner juste avec sel, poivre et ail. Nous avons ajouté des moules et des palourdes.</p>
    <span className="time">il y a 7h</span>
    <button className="reply-btn">Répondre</button>
  </div>

  
</section>


<section className="food-section">
  <div className="Food1" style={{backgroundImage: "src/assets/images23.jpg"}}>
    <div className="content">
      <h3>Garlic Alfredo</h3>
      <p>Comfort Food Classics</p>
    </div>
  </div>

  <div className="Food2" style={{backgroundImage: "src/assets/images23.jpg"}}>
    <div className="content">
      <h3>Albaloo Polo</h3>
      <p>International Eats</p>
    </div>
  </div>

  <div className="Food" style={{backgroundImage: "src/assets/imge.webp)"}}>
    <div className="content">
      <h3>Breakfast Casserole</h3>
      <p>Breakfast & Brunch</p>
    </div>
  </div>
</section>
  <h2 className="explore-title">Explore More</h2>
    <section className="explore">
    

      <div className="explore-grid">
        <div className="explore-card">
          <img src="src/assets/dowlod3.avif" alt="" className="profile"/>
          <h3>Garlic Alfredo</h3>
          <p>Comfort Food Classics</p>
        </div>

      </div>
       <div className="explore-grid">
        <div className="explore-card">
          <img src="src/assets/dowlod3.avif" alt="" className="profile"/>
          <h3>Garlic Alfredo</h3>
          <p>Comfort Food Classics</p>
        </div>

      </div>
       <div className="explore-grid">
        <div className="explore-card">
          <img src="src/assets/dowlod3.avif" alt="" className="profile"/>
          <h3>Garlic Alfredo</h3>
          <p>Comfort Food Classics</p>
        </div>

      </div>
       <div className="explore-grid">
        <div className="explore-card">
          <img src="src/assets/dowlod3.avif" alt="" className="profile"/>
          <h3>Garlic Alfredo</h3>
          <p>Comfort Food Classics</p>
        </div>

      </div>
       <div className="explore-grid">
        <div className="explore-card">
          <img src="src/assets/dowlod3.avif" alt="" className="profile"/>
          <h3>Garlic Alfredo</h3>
          <p>Comfort Food Classics</p>
        </div>

      </div>
    </section>


    <h1>Trending Now</h1>
   <section className="pot1 ">
    <div className="pot ">
      <div className="tender">
        <img src="src/assets/download1.jpg" alt="" />
       <h5>tender pot rasrt</h5>
       <p>adipisicing elit. Atque modi itaque, nisi sunt maxime unde</p>

      </div>
      
       <div className="tender">
        <img src="src/assets/dowlod3.avif" alt="" />
           <h5>tender pot rasrt</h5>
         <p>adipisicing elit. Atque modi itaque, nisi sunt maxime unde</p>
      </div>
       <div className="tender">
        <img src="src/assets/images23.jpg" alt="" />
         <h5>tender pot rasrt</h5>
         <p>adipisicing elit. Atque modi itaque, nisi sunt maxime unde</p>
      </div>
       <div className="tender">
        <img src="src/assets/images22.jpg" alt="" />
         <h5>tender pot rasrt</h5>
           <p>adipisicing elit. Atque modi itaque, nisi sunt maxime unde</p>
      </div>
    </div>
   </section>
   <h1>Don't Miss</h1>
   <section className="food-section">
  <div className="Food1" style={{backgroundImage: "src/assets/images23.jpg"}}>
    <div className="content">
      <h3>Garlic Alfredo</h3>
      <p>Comfort Food Classics</p>
    </div>
  </div>

  <div className="Food2" style={{backgroundImage: "src/assets/images23.jpg"}}>
    <div className="content">
      <h3>Albaloo Polo</h3>
      <p>International Eats</p>
    </div>
  </div>

  <div className="Food" style={{backgroundImage: "src/assets/imge.webp)"}}>
    <div className="content">
      <h3>Breakfast Casserole</h3>
      <p>Breakfast & Brunch</p>
    </div>
  </div>
</section>
    <h1>Trending Now</h1>
   <section className="pot1 ">
    <div className="pot ">
      <div className="tender">
        <img src="src/assets/gettyimages23.webp" alt="" />
       <h5>tender pot rasrt</h5>

      </div>
       <div className="tender">
        <img src="src/assets/images23.jpg" alt="" />
         <h5>tender pot rasrt</h5>

      </div>
       <div className="tender">
        <img src="src/assets/images24.jpg" alt="" />
           <h5>tender pot rasrt</h5>

      </div>
       <div className="tender">
        <img src="src/assets/Variety-fruits-vegetables (1).webp" alt="" />
         <h5>tender pot rasrt</h5>

      </div>
       <div className="tender">
        <img src="src/assets/what2.webp" alt="" />
         <h5>tender pot rasrt</h5>

      </div>
    </div>
   </section>
      <section className="adipisicing ">
        <div>
                <img src="src/assets/what2.webp" alt="" />
        </div>
          <div>
            <p className="collection">collection</p>
            <h1>32 Best Mac & Cheese Recipes</h1>
           <p>Cheesy and oh so satisfying, mac and <br /> cheese can do no wrong. Transport <br /> yourself back to childhood with one of  <br />these classic or kicked-up options.</p>
          </div>
      </section>
        
         <section className="pot1 ">
    <div className="pot ">
      <div className="tender">
        <img src="src/assets/gettyimages23.webp" alt="" />
       <h5>tender pot rasrt</h5>

      </div>
       <div className="tender">
        <img src="src/assets/images23.jpg" alt="" />
         <h5>tender pot rasrt</h5>

      </div>
       <div className="tender">
        <img src="src/assets/images24.jpg" alt="" />
           <h5>tender pot rasrt</h5>

      </div>
       <div className="tender">
        <img src="src/assets/Variety-fruits-vegetables (1).webp" alt="" />
         <h5>tender pot rasrt</h5>

      </div>
       <div className="tender">
        <img src="src/assets/what2.webp" alt="" />
         <h5>tender pot rasrt</h5>

      </div>
    </div>
   </section>
    <section className="pot1 ">
    <div className="pot ">
      <div className="tender">
        <img src="src/assets/gettyimages23.webp" alt="" />
       <h5>tender pot rasrt</h5>

      </div>
       <div className="tender">
        <img src="src/assets/images23.jpg" alt="" />
         <h5>tender pot rasrt</h5>

      </div>
       <div className="tender">
        <img src="src/assets/images24.jpg" alt="" />
           <h5>tender pot rasrt</h5>

      </div>
       <div className="tender">
        <img src="src/assets/Variety-fruits-vegetables (1).webp" alt="" />
         <h5>tender pot rasrt</h5>

      </div>
       <div className="tender">
        <img src="src/assets/what2.webp" alt="" />
         <h5>tender pot rasrt</h5>

      </div>
    </div>
   </section>
    <section className="pot1 ">
      <div>
        
      </div>
   </section>
    <section className="pot1 ">
    <div className="pot ">
      <div className="tender">
        <img src="src/assets/gettyimages23.webp" alt="" />
       <h5>tender pot rasrt</h5>

      </div>
       <div className="tender">
        <img src="src/assets/images23.jpg" alt="" />
         <h5>tender pot rasrt</h5>

      </div>
       <div className="tender">
        <img src="src/assets/images24.jpg" alt="" />
           <h5>tender pot rasrt</h5>

      </div>
       <div className="tender">
        <img src="src/assets/Variety-fruits-vegetables (1).webp" alt="" />
         <h5>tender pot rasrt</h5>

      </div>
       <div className="tender">
        <img src="src/assets/what2.webp" alt="" />
         <h5>tender pot rasrt</h5>

      </div>
    </div>
   </section>
      <h3 className="More ">Find More Recipes</h3>
     
    <div className="search-box">
      {/* <Search className="search-icon" size={20} /> */}
      <input type="text" placeholder="I'm craving..." />
      
    </div>
     
    <div className="sear">
      searcher
    </div>
    
    <div className="footer-top">
 

    
  </div>
      <footer className="footer">
      
  {/* <!-- Top Footer --> */}
 

  {/* <!-- Links Section --> */}
  <div className="footer-links">
    <a href="#">Back To Top</a>
    <a href="#">All Categories</a>
    <a href="#">Site Map</a>
    <a href="#">About Us</a>
    <a href="#">Help</a>
   
  </div>

  {/* <!-- Bottom Footer --> */}
  <div className="footer-bottom">

    <Facebook /><Instagram /><Pilcrow /><Youtube /><MessageSquareMore />    <ArrowUpFromDot />
    <p>The Discovery Family of Networks</p>
    <p>© 2026 Warner Bros. Discovery, Inc. All rights reserved.</p>

    <div className="legal-links">
      <a href="#">Advertise</a>
      <a href="#">AdChoices</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Visitor Agreement</a>
      <a href="#">California Privacy Policy</a>
      <a href="#">Do Not Sell or Share My Personal Information</a>
    </div>
  </div>

</footer>
   
</>
  )
}
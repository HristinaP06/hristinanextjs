/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div>
      <div className="cover">
        <h1 className="title">Flowers</h1>
      </div>

      <div className="columns">
        <div className="column-half">
          <img className="image" src="/flower1.jpg" alt="flower1" />
        </div>
        <div className="column-half">
          <h2 className="section-title">Spring Flowers</h2>
          <p>
          Is there anything better than seeing the first flowers of spring peeking out after a long, 
          cold winter? Even when there&quot;s still snow on the ground, we&quot;re treated to early spring bloomers
           like glory of the snow, snowdrops, and crocuses, reminding us all of the sunny days ahead. 
           Whether you choose annuals to replant each season or perennials that come back year after year,
            including a variety of spring flowers in your landscaping ideas will provide constant blooms 
            from early spring until the warmer days of summer arrive. The most important factor when planning
             your garden is making sure you give your plants exactly what they need. To start, you&quot;ll 
             want to clearly read the plant&quot;s label. Full sun means six or more hours of direct sunlight;
              part sun means about half of that. On the other hand, full shade means no direct sunlight or
               only a tiny bit of mild morning sun. Sun lovers will not bloom in shade, and shade lovers will
                sizzle if you plant them in direct sun. Finally, make sure when you are planting perennials
                 that you choose those that can survive winters in your USDA hardiness zone. 
                 Before you start planning your garden with these beautiful spring flowers, make sure
                  you have the right gear first. Grab a pair of gardening gloves and gardening shoes 
                  and then get to work!
          </p>
        </div>
      </div>

      <div className="columns">
        <div className="column-half">
          <h2 className="section-title">Dutch crocus</h2>
          <p>
          Crocus vernus (spring crocus, giant crocus) is a species in Family Iridaceae, native to the 
          Alps, the Pyrenees, and the Balkans. Its cultivars and those of Crocus flavus (Dutch crocus)
           are used as ornamental plants. The Dutch crocuses are larger than the other cultivated crocus 
           species (e.g., Crocus chrysanthus). Depending on the year, Crocus vernus starts flowering about
            the same time or up to 2 weeks after Crocus chrysanthus (snow crocus) starts flowering. 
            Height: 4–6 (10–15 cm).
          </p>
        </div>
        <div className="column-half">
          <img className="image" src="/flower2.jpg" alt="flower2" />
        </div>
      </div>

      

      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery">
          <img className="gallery-image" src="/flower3.jpg" alt="flower3" />
          <img className="gallery-image" src="/flower4.jpg" alt="flower4" />
          <img className="gallery-image" src="/flower5.jpg" alt="flower5" />
          <img className="gallery-image" src="/flower6.jpg" alt="flower6" />
          <img className="gallery-image" src="/flower7.jpg" alt="flower7" />
          <img className="gallery-image" src="/flower8.jpg" alt="flower8" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title"></h2>
        <div className="card-container">
          <div className="card">
            <img className="avatar" src="/flower9.jpg" alt="flower9" />
            <h3 className="card-name">Tulip</h3>
            <p>
            Tulip, (genus Tulipa), genus of about 100 species of bulbous herbs in the lily family
             (Liliaceae), native to Central Asia and Turkey. Tulips are among the most popular of
              all garden flowers, and numerous cultivars and varieties have been developed.
              Tulip cultivation likely began in Persia (Iran) in the 10th century, and it eventually 
              became a symbol of the Ottoman Empire. Tulips were introduced to the Western world by
               Augier Ghislain de Busbecq, the Viennese ambassador to Turkey, who wrote of seeing 
               the plants in Edirne, Turkey, in 1551 and later sent some seeds to Austria.
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/flower10.jpg" alt="flower10" />
            <h3 className="card-name">Columbine</h3>
            <p>
            Columbine (Aquilegia), aka granny&quot;s bonnet, is a perennial flower that blooms in the spring. 
            There are more than 70 species of columbines, including native columbines that grow wild in 
            mountain areas, along streambeds, and in temperate woodlands. The deep-blue columbine that grow
             as wildflowers in Colorado mountains are direct descendants of the earliest columbines.
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/flower11.jpg" alt="flower11" />
            <h3 className="card-name">Pansy</h3>
            <p>
            Pansy, any of several popular cultivated violets of the genus Viola in the family Violaceae.
             Pansies have been grown for so long a period under such diverse conditions and in such a 
             variety of forms that their origin is uncertain. The numerous forms, with their striking 
             variations in colour, are the product of domestication.
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/flower12.jpg" alt="flower12" />
            <h3 className="card-name">Hellebores</h3>
            <p>
            Hellebores, the Eurasian genus Helleborus consists of approximately 20 species of herbaceous or
             evergreen perennial flowering plants in the family Ranunculaceae, within which it gave its name 
             to the tribe of Helleboreae. Despite names such as "winter rose", "Christmas rose" and "Lenten 
             rose", hellebores are not closely related to the rose family (Rosaceae). Many hellebore species 
             are poisonous.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

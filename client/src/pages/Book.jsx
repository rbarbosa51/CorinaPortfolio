import { Link } from "react-router-dom";

//font-Montserrat
export default function Book() {
  return (
    <div className="flex min-h-screen flex-col bg-oldPage px-8 text-slate-800">
      <div className="mb-8 mt-2 flex justify-between">
        <Link
          to={"/hub"}
          className="rounded-md border border-rose-950 p-1 px-4 text-rose-950"
        >
          Go Back
        </Link>
        <div className="text-rose-950 underline underline-offset-4">
          Corina Guzman
        </div>
      </div>
      <p className="sm:column-gap-30 md:column-gap-60 columns-1 text-rose-950 md:columns-2">
        <h1 className="text-center font-waterBrush text-8xl font-bold text-rose-800/60">
          Chapter 1
        </h1>
        <h1 className="mb-8 text-center font-waterBrush text-4xl font-bold text-rose-800/60">
          My Story
        </h1>
        <b>I was born .....</b> Lorem ipsum dolor sit amet consectetur
        adipisicing elit.{" "}
        <mark className="bg-pink-200/80 px-1">Some highlighted Text</mark> Nemo
        aperiam earum maxime dolorem. Doloribus dolores delectus fugiat eaque
        nulla nisi veniam iste unde vel excepturi eligendi perferendis
        temporibus necessitatibus, qui vero, enim veritatis recusandae
        voluptatum optio nesciunt fugit deserunt maxime voluptatem?
        <br />
        <br /> <b>I went to school.....</b> Optio enim facere eveniet delectus
        modi inventore doloremque atque beatae aliquam.{" "}
        <mark className="bg-pink-200/80 px-1">
          Some thing important about me.
        </mark>
        A veniam reprehenderit ipsam sint qui impedit nihil ratione! Doloribus,
        quae alias impedit voluptatibus, molestiae commodi fugiat ex quo
        consequuntur hic ratione dolorem explicabo aliquid necessitatibus est
        iure quasi assumenda, veritatis repudiandae quis eveniet. <br />
        <br />
        <b>I did X and Y...</b>Dignissimos doloribus nostrum voluptatibus veniam
        quidem placeat saepe suscipit dolore tenetur ipsum alias nam aut quas
        earum sunt consequatur harum perferendis blanditiis quae temporibus rem,
        minima ex odio! Qui repudiandae iure nostrum voluptatum magni voluptatem
        adipisci nemo suscipit provident ab reiciendis saepe aut facilis ea,
        doloremque reprehenderit dolore? <br />
        <br />
        Harum numquam iure ex, dolores itaque explicabo voluptatum
        reprehenderit, voluptate in fuga optio doloribus eos earum modi
        deserunt, quasi laborum? Voluptatem unde aliquam dolorum hic nobis,
        tempore maiores iste quos incidunt porro. Commodi est porro illum iste
        maxime reiciendis enim, accusamus quo beatae nulla quibusdam recusandae
        eius unde ut dolorem nam cum quam aliquam omnis aliquid sint quae animi
        itaque amet. Explicabo commodi perspiciatis iure repellat dolores nihil
        illum, corporis delectus cupiditate assumenda. <br />
        <br />
        Eveniet deleniti esse veniam porro cupiditate saepe, corrupti fugit
        aperiam non dolores dicta, expedita vel sunt odit reiciendis! Voluptas
        eos magni quas ut.
        <br />
        <br /> Dolores praesentium corrupti nisi voluptatem doloremque. Officia
        molestiae quis incidunt reiciendis hic et, quibusdam dolorem. Cum illum
        omnis reprehenderit soluta ad quia deserunt voluptatum necessitatibus
        deleniti, nisi quam sapiente quasi eligendi commodi qui, voluptates hic,
        laboriosam totam temporibus? Exercitationem, ea.{" "}
      </p>
    </div>
  );
}

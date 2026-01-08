import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const MembershipBanner = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container text-center">
        <p className="text-sm font-medium uppercase tracking-widest mb-4 text-primary-foreground/70">
        TeesnGees Wholesale
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mb-6">
          Become a Retail Partner
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Stock authentic, locally printed T-shirts featuring the Cape Town map, South Africa map, and Africa map.
          Join TeesnGees as a retail partner and access ready-made inventory, wholesale pricing, and better margins on minimum orders of 50 T-shirts.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            
            variant="nikeWhite" 
            size="xl"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild
          >
            
             <Link to={"/wholesale"} >Retail Program</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MembershipBanner;

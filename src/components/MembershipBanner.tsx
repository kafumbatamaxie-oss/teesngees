import { Button } from "@/components/ui/button";

const MembershipBanner = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container text-center">
        <p className="text-sm font-medium uppercase tracking-widest mb-4 text-primary-foreground/70">
        TeesnGees Membership
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mb-6">
          Become a Member
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Sign up for free. Join the community to get access to exclusive products, 
          member-only content, and the best of Nike delivered to you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            variant="nikeWhite" 
            size="xl"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Join Us
          </Button>
          <Button 
            variant="nikeOutline" 
            size="xl"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Sign In
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MembershipBanner;

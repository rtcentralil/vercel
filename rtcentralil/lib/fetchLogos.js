export async function getPartnerLogos() {
try {
      // Replace this with the actual API or file source for partner logos
      const logos = [
        { name: "YMCA", src: "/images/partners/partner1.png" },
        { name: "Partner 2", src: "/images/partners/partner2.png" },
        { name: "Partner 3", src: "/images/partners/partner3.png" },
      ];
      return logos;
    } catch (error) {
      console.error("Error fetching partner logos:", error);
      return [];
    }
  }
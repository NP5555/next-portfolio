import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((gridItem) => (
          <BentoGridItem key={gridItem.id} {...gridItem} />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;

export interface SectionTitleData {
  color: "blue" | "orange";   // adiciona mais cores se precisar
  title: string;              // primeira linha
  subtitle: string;           // segunda linha
}

/* catálogo de títulos que o App vai consumir */
export const sectionTitles: Record<"entendendo" | "construindo", SectionTitleData> =
{
  entendendo: {
    color: "blue",
    title: "Entendendo a Big Picture",
    subtitle:
      "Através da Big Picture de Deus Pai, Jesus e o Espírito Santo, construo a minha big picture pessoal.",
  },
  construindo: {
    color: "orange",
    title: "Construindo Minha Big Picture",
    subtitle:
      "Através de direcionamentos espirituais no âmbito natural, tenho um panorama estendido daquilo que já sou.",
  },
};
import "./section-title.css";

export type SectionTitleColor = "blue" | "orange";

export interface SectionTitleProps {
  color: SectionTitleColor;
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  color,
  title,
  subtitle,
}) => (
  <div className={`section-title-wrapper ${color}`}>
    <span className="label-pill">{title}</span>
    <p className="subtitle">{subtitle}</p>
  </div>
);

export default SectionTitle;
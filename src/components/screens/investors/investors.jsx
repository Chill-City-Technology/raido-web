import React from "react";
import { Image } from "react-bootstrap";
import { ArrowUpRight } from "react-bootstrap-icons";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import investorsData from "@/constants/investors.json";
import styles from "./investors.module.scss";

const getInitials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");

const InvestorCard = ({ investor }) => {
  const { name, description, logo, website } = investor;
  const initials = getInitials(name);

  return (
    <article className={styles.card} data-aos="fade-up">
      <div className={styles.cardHeader}>
        <div className={styles.logoWrap}>
          {logo ? (
            <Image src={logo} alt={name} fluid />
          ) : (
            <div className={styles.logoFallback}>{initials}</div>
          )}
        </div>
        <div>
          <h3>{name}</h3>
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.visit}
            >
              Visit site <ArrowUpRight />
            </a>
          )}
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

const InvestorsScreen = () => {
  const schemes = Array.isArray(investorsData) ? investorsData : [];

  return (
    <main className={styles.investorsScreen}>
      <SectionHeading head="Investors" />
      <CustomContainer>
        <p className={styles.intro}>
          Curated investors across schemes and sectors who are actively backing
          mobility, logistics, and inclusive growth initiatives similar to the
          tracxn reference showcase.
        </p>

        <div className={styles.schemes}>
          {schemes.map((scheme) => (
            <section className={styles.scheme} key={scheme.scheme}>
              <div className={styles.schemeHeader}>
                <span className={styles.schemeBadge}>{scheme.scheme}</span>
                {scheme.description && (
                  <p className={styles.schemeCopy}>{scheme.description}</p>
                )}
              </div>
              <div className={styles.grid}>
                {scheme.investors.map((inv) => (
                  <InvestorCard investor={inv} key={inv.name} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </CustomContainer>
    </main>
  );
};

export default InvestorsScreen;

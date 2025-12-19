import React, { useState, useEffect, useRef } from 'react';

// Animated section component
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Shared data
const labData = {
  info: {
    name: "Enbody Lab",
    tagline: "Community genomics in a changing world",
    institution: "Department of Computational Biology, Cornell University",
    pi: "Dr. Erik D. Enbody",
    title: "Susan E. Lynch Assistant Professor",
    email: "enbody@cornell.edu"
  },
  
  news: [
    {
      date: "2025",
      type: "Welcome!",
      title: "Welcome to the lab Amanda!",
      description: "Amanda joins the lab as a PhD student from the GGD field.",
      image: "/images/A_Sun.jpg",
      link: "team", // Add a link URL here to make the image clickable, or leave empty to disable
      enableLink: true // Set to true to enable the hyperlink
    },
    {
      date: "2025",
      type: "News",
      title: "Rachel performs at The Nutcracker",
      description: "In her Ithaca ballet debut, Rachel performed at the 2025 Ithaca Ballet performance of The Nutcracker.",
      image: "/images/IMG_5636.jpg",
      link: "https://doi.org/10.1093/molbev/msad270", // Add a link URL here
      enableLink: true // Set to true to enable the hyperlink
    },
    {
      date: "2025",
      type: "Publication",
      title: "CLAM is published!",
      description: "Cade's new method for estimating nucleotide diversity and divergence using depth information is published in MBE!",
      image: "/images/clam.jpeg",
      link: "https://doi.org/10.1093/molbev/msaf282", // Add a link URL here
      enableLink: true // Set to true to enable the hyperlink
    },
    {
      date: "2025",
      type: "Welcome",
      title: "Welcome to the lab Rachel!",
      description: "Rachel joins the lab as a PhD student co-advised with Philipp Messer.",
      image: "/images/Rachel_G_crop.jpg",
      link: "team", // Add a link URL here
      enableLink: true // Set to true to enable the hyperlink
    },
    {
      date: "2025",
      type: "Lab opening",
      title: "The Enbody Lab is Open!",
      description: "The Enbody Lab is officially open at Cornell University! Erik is joining the faculty in the Department of Computational Biology.",
      image: "/images/atkinson.png",
      link: "team", // Add a link URL here
      enableLink: true // Set to true to enable the hyperlink
    }
  ],

  researchAreas: [
    {
      id: "evolutionary-genomics",
      title: "Evolutionary Genomics",
      subtitle: "Studying evolutionary processes through large-scale genomic data",
      image: "/images/daphne_admx.png",
      homeImage: "/images/LGF.jpg",
      description: "Our research program investigates the evolutionary processes that generate diversity in wild populations using large-scale genomic approaches. By combining population genomics with long-term field studies, we can directly observe evolution in action.",
      sections: [
        {
          title: "Galápagos Finches",
          content: "Our research leverages the unique system of Thraupidae finches on the Galápagos Islands to investigate the link between fitness and genetic variation. We are re-opening a long-standing monitoring program on Daphne Major, with a particular focus on incorporating genomic data into studying this population. Recently we completed analyzing nearly 4,000 Darwin's finch genomes derived from individually marked finches collected over 40 years on Daphne Major by Drs. Peter and Rosemary Grant. We continue to monitor this unique population using annual sampling to study allele frequency change over time. We are also expanding this project to study the evolution of genomic architecture across the Galápagos islands."
        },
        {
          title: "Adaptation Genomics",
          content: "We use population genomic approaches to study the genetic basis of adaptation in natural populations worldwide. By combining whole genome sequencing with ecological data, we identify genomic regions under selection and link these to phenotypic traits. Our work has spanned diverse taxa, including fish and birds and abalone, and aims to understand how organisms adapt to changing environments."
        }
      ],
      publications: [
        { title: "Community-wide genome sequencing reveals 30 years of Darwin's finch evolution", journal: "Science 381(6665)", year: "2023", link: "https://www.science.org/doi/full/10.1126/science.adf6218" },
        { title: "Rapid adaptive radiation of Darwin's finches depends on ancestral genetic modules", journal: "Science Advances 8(27)", year: "2022", link: "https://www.science.org/doi/10.1126/sciadv.abm0982" },
        { title: "A multispecies BCO2 beak color polymorphism in the Darwin's finch radiation", journal: "Current Biology", year: "2021", link: "https://www.cell.com/current-biology/fulltext/S0960-9822(21)00542-4" },
        { title: "Ecological adaptation in European eels is based on phenotypic plasticity", journal: "PNAS 118(4)", year: "2021", link: "https://www.pnas.org/content/118/4/e2022620118" },
        { title: "Recurrent convergent evolution at amino acid residue 261 in fish rhodopsin", journal: "PNAS 116(37)", year: "2019", link: "https://www.pnas.org/content/116/37/18473" }
      ]
    },
    {
      id: "conservation-genomics",
      title: "Conservation Genomics",
      subtitle: "Applying genomic tools to protect biodiversity",
      image: "/images/ca_hotspot_map.png",
      homeImage: "/images/otter.png",
      description: "I lead population genomic projects to develop scalable, reproducible pipelines and viable metrics for conservation genomics. By making high-throughput genomic analysis accessible, we can better understand and protect biodiversity in the face of climate change.",
      sections: [
        {
          title: "California Conservation Genomics Project",
          content: "I am the bioinformatics lead on the California Conservation Genomics Project. This consortium aims to produce the most comprehensive multispecies genomic dataset ever assembled to help manage and protect regional biodiversity in the face of climate change. I lead the bioinformatics team to carry out comparative genomics analyses for conservation applications and workflows for high throughput analysis in the cloud of massive genomic datasets."
        },
        {
          title: "Genome Assemblies",
          content: "I have contributed to the generation of novel resources for genomic studies on various non-model species. These state-of-the-art genome assemblies are chromosome scale and include high quality genome annotations."
        }
      ],
      genomes: [
        { name: "White Wagtail", species: "Motacilla alba", link: "https://www.ncbi.nlm.nih.gov/assembly/GCF_015832195.1" },
        { name: "Small Tree Finch", species: "Camarhynchus parvulus", link: "https://www.ncbi.nlm.nih.gov/assembly/GCA_902806625.1" },
        { name: "European Rabbit", species: "Oryctolagus cuniculus", link: "https://www.ncbi.nlm.nih.gov/assembly/GCA_013371645.1" },
        { name: "White-shouldered Fairywren", species: "Malurus alboscapulatus", link: "https://www.ncbi.nlm.nih.gov/assembly/GCA_025434525.1/" },
        { name: "Red-backed Fairywren", species: "Malurus melanocephalus", link: "https://www.ncbi.nlm.nih.gov/datasets/genome/GCF_030028575.1/" }
      ],
      publications: [
        { title: "Efficient Estimation of Nucleotide Diversity and Divergence using Depth Information", journal: "Molecular Biology and Evolution", year: "2025", link: "https://doi.org/10.1093/molbev/msaf282" },
        { title: "A fast, reproducible, high-throughput variant calling workflow for evolutionary, ecological, and conservation genomics", journal: "Molecular Biology and Evolution 41(1)", year: "2024", link: "https://doi.org/10.1093/molbev/msad270" },
        { title: "Limited genomic signatures of population collapse in the critically endangered black abalone", journal: "Molecular Ecology", year: "2024", link: "https://doi.org/10.1111/mec.17352" },
        { title: "Patterns of Genetic Diversity Within Three California Quail Species Are Best Explained by Climate and Landscape Changes", journal: "Molecular Ecology 34(20)", year: "2025", link: "https://doi.org/10.1111/mec.70093" }
      ]
    },
    {
      id: "plumage-evolution",
      title: "Plumage Evolution",
      subtitle: "The genomic basis of color variation in birds",
      image: "/images/feather.jpg",
      homeImage: "/images/wsfw.jpg",
      description: "I use genomics and field research to understand how plumage coloration evolves in birds. This work spans from the evolution of female ornamentation to the genetic architecture of color polymorphisms across species.",
      sections: [
        {
          title: "White-shouldered Fairywren",
          content: "Erik has worked for many years studying the role of selection in the evolution of female plumage ornamentation in the White-shouldered Fairywren of New Guinea. In this species, different populations vary in the degree of ornamentation in female but not male plumage. We use the White-shouldered Fairywren as a model to test hypotheses for the evolution of female ornamentation, because the degree to which selection (sexual or otherwise) acts on female ornamentation is both poorly understood and controversial. In this international collaboration, we have described the evolutionary history of the various subspecies, examined evidence for selection on female ornamentation using genomics, and the proximate mechanisms shaping signal production."
        },
        {
          title: "Wagtail Plumage Diversification",
          content: "I work with Per Alström and other collaborators to study the evolution of plumage coloration in Motacilla wagtails. The wagtails group of colorful passerine birds are common across Europe, Asia, and Africa. Several species are characterized by large variation in plumage coloration, but little genetic divergence. We leverage these features to study the processes that have generated such dramatic variation in plumage signals."
        },
      ],
      publications: [
        { title: "The evolutionary history and mechanistic basis of female ornamentation in a tropical songbird", journal: "Evolution 76(8):1720-1736", year: "2022", link: "https://doi.org/10.1111/evo.14504" },
        { title: "Asymmetric introgression reveals the genetic architecture of a plumage trait", journal: "Nature Communications", year: "2021", link: "https://www.nature.com/articles/s41467-021-21340-y" },
        { title: "Introgression underlies phylogenetic uncertainty but not parallel plumage evolution in a recent songbird radiation", journal: "Systematic Biology", year: "2023", link: "https://doi.org/10.1093/sysbio/syad062" },
        { title: "Genetic basis and evolution of structural color polymorphism in an Australian songbird", journal: "Molecular Biology and Evolution", year: "2024", link: "https://doi.org/10.1093/molbev/msae014" },
        { title: "Female ornamentation is associated with elevated aggression and testosterone in a tropical songbird", journal: "Behavioral Ecology 29(5)", year: "2018", link: "https://doi.org/10.1093/beheco/ary090" }
      ]
    }
  ],

  // UPDATED PUBLICATIONS ARRAY
// Replace the existing 'publications' array in your App.jsx (around line 152) with this:

publications: [
  { year: "2025", authors: "Mirchandani, C., E.D. Enbody, T.B. Sackton, R. Corbett-Detig", title: "Efficient Estimation of Nucleotide Diversity and Divergence using Depth Information", journal: "Molecular Biology and Evolution", link: "https://doi.org/10.1093/molbev/msaf282" },
  { year: "2025", authors: "Benham, P.M., C. Cicero, M.M. Davila, E.D. Enbody, K.S. Miller, A.J. Shultz, L.L. Smith, M.W. Nachman, R.C.K. Bowie", title: "Patterns of Genetic Diversity Within Three California Quail Species Are Best Explained by Climate and Landscape Changes", journal: "Molecular Ecology 34(20):e70093", link: "https://doi.org/10.1111/mec.70093" },
  { year: "2025", authors: "Khalil, S., J. Walsh, E.D. Enbody, D.T. Baldassarre, M.S. Webster, J. Karubian", title: "Adaptive introgression of putative carotenoid pigment genes explains geographic variation in a sexually-selected plumage trait", journal: "Evolution", link: "https://doi.org/10.1093/evolut/qpaf135" },
  { year: "2024", authors: "Andrade, P., Alves, J.M., [...] E.D. Enbody, [...] L. Andersson, M. Carneiro", title: "Selection against domestication alleles in introduced rabbit populations", journal: "Nature Ecology & Evolution", link: "https://doi.org/10.1038/s41559-024-02443-3" },
  { year: "2024", authors: "Sangdehi, F.M., M.S. Jamsandekar, E.D. Enbody, M.E. Pettersson, L. Andersson", title: "Copy number variation and elevated genetic diversity at immune trait loci in Atlantic and Pacific herring", journal: "BMC Genomics", link: "https://doi.org/10.1186/s12864-024-10658-w" },
  { year: "2024", authors: "Wooldridge, B., C. Orland, E.D. Enbody, M. Escalona, C. Mirchandani, R. Corbett-Detig, [...] B. Shapiro", title: "Limited genomic signatures of population collapse in the critically endangered black abalone (Haliotis cracherodii)", journal: "Molecular Ecology", link: "https://doi.org/10.1111/mec.17352" },
  { year: "2024", authors: "Sin, S.Y.W., F.K., G. Chen, P.-Y. Huang, E.D. Enbody, J. Karubian, M.S. Webster, S.V. Edwards", title: "Genetic basis and evolution of structural color polymorphism in an Australian songbird", journal: "Molecular Biology and Evolution", link: "https://doi.org/10.1093/molbev/msae014" },
  { year: "2024", authors: "Mirchandani, C.D., A.J. Shultz, G.W.C. Thomas, S.J. Smith, M. Baylis, B. Arnold, R. Corbett-Detig†, E.D. Enbody†, T.B. Sackton†", title: "A fast, reproducible, high-throughput variant calling workflow for evolutionary, ecological, and conservation genomics", journal: "Molecular Biology and Evolution 41(1)", note: "† equal contribution", link: "https://doi.org/10.1093/molbev/msad270" },
  { year: "2023", authors: "E.D. Enbody, A.T. Sendell-Price, C.G. Sprehn, C.-J. Rubin, P.M. Visscher, B.R. Grant, P.R. Grant, L. Andersson", title: "Community-wide genome sequencing reveals 30 years of Darwin's finch evolution", journal: "Science 381(6665)", link: "https://www.science.org/doi/full/10.1126/science.adf6218" },
  { year: "2023", authors: "Rancilhac, L., E.D. Enbody, R. Harris, T. Saitoh, M. Irestedt, Y. Liu, F. Lei, L. Andersson, P. Alström", title: "Introgression underlies phylogenetic uncertainty but not parallel plumage evolution in a recent songbird radiation", journal: "Systematic Biology", link: "https://doi.org/10.1093/sysbio/syad062" },
  { year: "2023", authors: "Hill, J.†, E.D. Enbody†, H. Bi†, S. Lamichhaney, D. Schwochow, S. Younis, F. Widemo, L. Andersson", title: "Low mutation load in a supergene underpinning alternative male mating strategies in ruff", journal: "Molecular Biology and Evolution 40(12)", note: "† equal contribution", link: "https://doi.org/10.1093/molbev/msad224" },
  { year: "2023", authors: "Boersma, J., E.D. Enbody, S. Ketaloya, H. Watts, J. Karubian, H. Schwabl", title: "Does capacity to elevate androgens underlie variation in female ornamentation and territoriality in White-shouldered Fairywren (Malurus alboscapulatus)?", journal: "Hormones & Behavior 154", link: "https://doi.org/10.1016/j.yhbeh.2023.105393" },
  { year: "2023", authors: "Alström, A., Z. Mohammadi, P.F. Donald, [...] E.D. Enbody, [...] M. Stervander", title: "Integrative taxonomy reveals unrecognised species diversity in African Corypha larks", journal: "Zoological Journal of the Linnean Society", link: "https://doi.org/10.1093/zoolinnean/zlad107" },
  { year: "2023", authors: "Pettersson, M.E., A.P. Fuentes-Pardo, C.M. Rochus, E.D. Enbody, H. Bi, R. Väinölä, L. Andersson", title: "A long-standing hybrid population between Pacific and Atlantic herring in a subarctic fjord of Norway", journal: "Genome Biology and Evolution 15(5)", link: "https://doi.org/10.1093/gbe/evad069" },
  { year: "2023", authors: "Alström, P., Z. Mohammadi, E.D. Enbody, [...] M. Stervander", title: "Systematics of the avian family Alaudidae using multilocus and genomic data", journal: "Avian Research 14:100095", link: "https://doi.org/10.1016/j.avrs.2023.100095" },
  { year: "2023", authors: "Khalil, S., E.D. Enbody, C. Frankl, J.F. Welklin, R.E. Koch, M.B. Toomey, S.Y.W. Sin, S.V. Edwards, M. Gahr, H. Schwabl, M.S. Webster, J. Karubian", title: "Testosterone coordinates gene expression across different tissues to produce carotenoid-based red ornamentation", journal: "Molecular Biology and Evolution 40(4)", link: "https://doi.org/10.1093/molbev/msad056" },
  { year: "2022", authors: "Boersma, J., E.D. Enbody, J. Karubian, H. Watts, H. Schwabl", title: "Drought disrupts year-round breeding readiness in a tropical songbird", journal: "Avian Conservation and Ecology 17(2):44", link: "https://doi.org/10.5751/ACE-2343-170244" },
  { year: "2022", authors: "Rubin, C.-J.†, E.D. Enbody†, M.P. Dobreva, A. Abzhanov, [...] P.R. Grant, L. Andersson", title: "Rapid adaptive radiation of Darwin's finches depends on ancestral genetic modules", journal: "Science Advances 8(27)", note: "† equal contribution", link: "https://doi.org/10.1126/sciadv.abm5982" },
  { year: "2022", authors: "Enbody, E.D., S.Y.W. Sin, J. Boersma, H. Schwabl, S.V. Edwards, M.S. Webster, J. Karubian", title: "The evolutionary history and mechanistic basis of female ornamentation in a tropical songbird", journal: "Evolution 76(8):1720-1736", link: "https://doi.org/10.1111/evo.14545" },
  { year: "2022", authors: "Boersma, J., J.A. Jones, E.D. Enbody, J. Welklin, S. Ketaloya, J. Karubian, H. Schwabl", title: "Male White-shouldered Fairywrens elevate testosterone when courting females but not during territorial challenges", journal: "Hormones and Behavior", link: "https://doi.org/10.1016/j.yhbeh.2022.105156" },
  { year: "2021", authors: "E.D. Enbody, C.G. Sprehn, A. Abzhanov, H. Bi, M.P. Dobreva, O.G. Osborne, C.J. Rubin, P.R. Grant, B.R. Grant, L. Andersson", title: "A multispecies BCO2 beak color polymorphism in the Darwin's finch radiation", journal: "Current Biology 31(24)", link: "https://doi.org/10.1016/j.cub.2021.09.085" },
  { year: "2021", authors: "Odom, K.J., K.E. Cain, M.L. Hall, [...] E.D. Enbody, [...] M.S. Webster", title: "Sex role similarity and sexual selection predict male and female song elaboration and dimorphism in fairy-wrens", journal: "Ecology and Evolution 11(24)", link: "https://doi.org/10.1002/ece3.8378" },
  { year: "2021", authors: "Turbek, S.P., G.A. Semenov, E.D. Enbody, L. Campagna, S.A. Taylor", title: "Variable signatures of selection despite conserved recombination landscapes early in speciation", journal: "Journal of Heredity 112(6)", link: "https://doi.org/10.1093/jhered/esab054" },
  { year: "2021", authors: "Liu, H., C. Chen, M. Lv, N. Liu, Y. Hu, H. Zhang, E.D. Enbody, Z. Gao, L. Andersson, W. Wang", title: "Comparative genomic analysis reveals ecological adaptation of teleost olfactory receptor repertoires", journal: "Molecular Biology & Evolution", link: "https://doi.org/10.1093/molbev/msab152" },
  { year: "2021", authors: "Semenov, G.A., E. Linck, E.D. Enbody, P. Alström, L. Andersson, D.R. Khaydarov, S.A. Taylor", title: "Asymmetric introgression reveals the genetic architecture of a plumage trait", journal: "Nature Communications", link: "https://www.nature.com/articles/s41467-021-21340-y" },
  { year: "2021", authors: "Enbody, E.D.†, M.E. Pettersson†, C. Grace Sprehn, S. Palm, H. Wickström, L. Andersson", title: "Ecological adaptation in European eels is based on phenotypic plasticity", journal: "PNAS 118(4)", note: "† equal contribution", link: "https://www.pnas.org/content/118/4/e2022620118" },
  { year: "2020", authors: "Grant, P.R., R. Grant, E.D. Enbody, L. Andersson, S. Lamichhaney", title: "Darwin's finches, an iconic adaptive radiation", journal: "eLS 1:672–682", link: "https://onlinelibrary.wiley.com/doi/10.1002/9780470015902.a0029107" },
  { year: "2020", authors: "Gustafsson, R., U. Eckhard, W. Ye, E.D. Enbody, M. Pettersson, P. Jemth, L. Andersson, M. Selmer", title: "Structure and characterization of phosphoglucomutase 5 from Atlantic and Baltic herring", journal: "Biomolecules 10(2)", link: "https://www.mdpi.com/2218-273X/10/12/1631" },
  { year: "2020", authors: "Boersma, J., E.D. Enbody, J.A. Jones, E. Lopez-Contreras, J. Karubian, H. Schwabl", title: "Exogenous testosterone induces partial ornamentation which enhances vocal aggression in a female tropical songbird", journal: "Behavioral Ecology 31(5)", link: "https://doi.org/10.1093/beheco/araa077" },
  { year: "2019", authors: "Javůrková, V.G., E.D. Enbody, J. Kreisinger, K. Chmel, J. Mrázek, J. Karubian", title: "Plumage iridescence is associated with distinct feather microbiota in a tropical passerine", journal: "Scientific Reports", link: "https://www.nature.com/articles/s41598-019-49220-y" },
  { year: "2019", authors: "Hill, J., E.D. Enbody, M.E. Pettersson, C.G. Sprehn, D. Bekkevold, A. Folkvord, L. Laikre, G. Kleinau, P. Scheerer, L. Andersson", title: "Recurrent convergent evolution at amino acid residue 261 in fish rhodopsin", journal: "PNAS 116(37)", note: "SciLifeLab Scientific Highlight", link: "https://www.pnas.org/content/116/37/18473" },
  { year: "2019", authors: "Enbody, E.D., J. Boersma, J.A. Jones, M.W.H. Chatfield, S. Ketaloya, D. Nason, D.T. Baldassarre, J. Hazlehurst, O. Gowen, H. Schwabl, J. Karubian", title: "Social organization and breeding biology of the White-shouldered Fairywren Malurus alboscapulatus", journal: "Emu: Austral Ornithology 19(3)", note: "Cover photo", link: "https://www.tandfonline.com/doi/full/10.1080/01584197.2019.1595663" },
  { year: "2018", authors: "Enbody, E.D., J. Boersma, H. Schwabl, J. Karubian", title: "Female ornamentation is associated with elevated aggression and testosterone in a tropical songbird", journal: "Behavioral Ecology 29(5)", link: "https://academic.oup.com/beheco/article/29/5/1056/5026290" },
  { year: "2017", authors: "Enbody, E.D., S.M. Lantz, J. Karubian", title: "Production of plumage ornaments among males and females of two closely related tropical passerine bird species", journal: "Ecology and Evolution", link: "http://onlinelibrary.wiley.com/doi/10.1002/ece3.3000/full" },
  { year: "2017", authors: "Brouwer, L., M. van de Pol, [...] E.D. Enbody, [...] A. Cockburn", title: "Multiple hypotheses explain variation in extra-pair paternity at different levels in a highly variable avian family", journal: "Molecular Ecology 26", link: "http://onlinelibrary.wiley.com/doi/10.1111/mec.14385/full" }
],

  team: {
    pi: {
      name: "Dr. Erik D. Enbody",
      role: "Principal Investigator",
      title: "Susan E. Lynch Assistant Professor",
      image: "/images/enbody_waterfall.jpg",
      bio: "I am an evolutionary biologist trained in population genomics, field ecology, and behavioral research. My research is driven by my fascination with the evolutionary processes that generate diversity in wild populations. This research includes projects on birds, mammals, and fish from the Americas, Eurasia, and Oceania.",
      education: [
        { years: "2025-", place: "Cornell University", role: "Susan E. Lynch Assistant Professor, Dept. of Computational Biology" },
        { years: "2021-24", place: "UC Santa Cruz", role: "Postdoctoral Scholar with Dr. Russ Corbett-Detig" },
        { years: "2018-21", place: "Uppsala University", role: "Postdoctoral Researcher with Dr. Leif Andersson" },
        { years: "2013-18", place: "Tulane University", role: "Ph.D. Ecology and Evolutionary Biology with Dr. Jordan Karubian" },
        { years: "2008-12", place: "Colorado College", role: "B.A. with Distinction in Biology" }
      ]
    },
    members: [
      { name: "Rachel Goodridge", role: "Ph.D. Student", status: "current", years: "2025-", note: "Co-advised with Philipp Messer", image: "/images/Rachel_G_crop.jpg" },
      { name: "Amanda Sun", role: "Ph.D. Student", status: "current", years: "2025-", note: "Working on evolutionary genomics with pangenomes", image: "/images/A_Sun.jpg" }
    ],
    alumni: [
      { name: "Cade Mirchandani", role: "Ph.D. Student", years: "2022-", note: "Developed snpArcher variant calling workflow, now Ph.D. candidate at UCSC" },
      { name: "Mara Baylis", role: "Ph.D. Student", years: "2022-23", note: "Previously junior specialist on CCGP, now Ph.D. candidate at Berkeley" },
      { name: "Nick Chan", role: "Ph.D. Student", years: "2022", note: "Undergraduate mentee working on population demography from genomics, now Ph.D. candidate at UC San Diego" },
      { name: "Sarah Khalil", role: "Ph.D. Student Mentee", years: "2017-", note: "Fairywren genomics, now postdoctoral scholar at Cornell Lab of Ornithology" }
    ]
  }
};

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage, scrollY }) => (
  <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrollY > 80 ? 'nav-blur bg-stone-950/85 py-3' : 'py-5'
  }`}>
    <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
      <button
        onClick={() => setCurrentPage('home')}
        className="flex items-center gap-3 group"
      >
        <span className="font-display text-lg font-semibold teal-accent group-hover:text-[#b8c4a8] transition-colors">
          Enbody Lab
        </span>
        <img
          src="/images/cornell_seal_simple_web_white.png"
          alt="Cornell University"
          className="h-8 opacity-90 group-hover:opacity-100 transition-opacity"
        />
      </button>
      <div className="flex gap-8 font-body text-sm tracking-wide">
        {[
          { id: 'research', label: 'Research' },
          { id: 'publications', label: 'Publications' },
          { id: 'team', label: 'Team' },
          { id: 'opportunities', label: 'Opportunities' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`link-underline transition-colors ${
              currentPage === item.id ? 'text-stone-100' : 'text-stone-400 hover:text-stone-100'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  </nav>
);

// Footer Component
const Footer = () => (
  <footer className="py-10 border-t border-stone-800">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg font-semibold teal-accent">Enbody Lab</span>
          <span className="text-stone-700">·</span>
          <span className="font-body text-sm text-stone-500">Cornell University</span>
        </div>
        <div className="flex gap-6 font-body text-xs text-stone-500">
          <a href="https://github.com/erikenbody" target="_blank" rel="noopener noreferrer" className="hover:text-stone-300 transition-colors">GitHub</a>
          <a href="https://scholar.google.com/citations?user=3bBANnkAAAAJ" target="_blank" rel="noopener noreferrer" className="hover:text-stone-300 transition-colors">Scholar</a>
          <a href="https://bsky.app/profile/erikenbody.bsky.social" target="_blank" rel="noopener noreferrer" className="hover:text-stone-300 transition-colors">Bluesky</a>
        </div>
      </div>
    </div>
  </footer>
);

// HOME PAGE
const HomePage = ({ setCurrentPage, setResearchSection }) => {
  const [newsStartIndex, setNewsStartIndex] = useState(0);
  const newsPerPage = 3;
  const visibleNews = labData.news.slice(newsStartIndex, newsStartIndex + newsPerPage);
  const hasMoreNews = newsStartIndex + newsPerPage < labData.news.length;
  const hasPrevNews = newsStartIndex > 0;

  return (
  <>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Daphne Major, Galápagos Islands"
          className="w-full h-full object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="bg-stone-950/35 p-8 md:p-12 border border-stone-800/30 max-w-5xl">
          <AnimatedSection>
            <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-4">
              {labData.info.institution}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] mb-6">
              {labData.info.name}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="font-body text-xl md:text-2xl text-stone-300 max-w-2xl leading-relaxed mb-4">
              {labData.info.tagline}
            </p>
            <p className="font-body text-base text-stone-400 max-w-2xl leading-relaxed mb-10">
              We combine field research and computational genomics to understand evolutionary processes shaping biodiversity and use this to inform conservation strategies.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={450}>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setCurrentPage('research')}
                className="font-body text-sm tracking-wide px-7 py-3.5 teal-bg text-stone-950 font-medium hover:bg-[#b8c4a8] transition-colors"
              >
                Explore Research
              </button>
              <button
                onClick={() => setCurrentPage('opportunities')}
                className="font-body text-sm tracking-wide px-7 py-3.5 border teal-border text-stone-100 hover:bg-[#9CAF88]/10 transition-colors"
              >
                Join the Lab
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 float-animation">
        <div className="w-px h-14 bg-gradient-to-b from-transparent via-[#9CAF88]/50 to-transparent" />
      </div>
    </section>

    {/* Three Research Areas */}
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-3 text-center">Research Focus</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-16">What We Study</h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="grid grid-cols-3 gap-8">
            {labData.researchAreas.map((area, index) => {
              return (
                <button
                  key={area.id}
                  onClick={() => {
                    setResearchSection(area.id);
                    setCurrentPage('research');
                  }}
                  className="group text-center"
                >
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-4 group-hover:text-[#9CAF88] transition-colors">
                    {area.title}
                  </h3>
                  <div className="aspect-square overflow-hidden bg-stone-800">
                    <img
                      src={area.homeImage}
                      alt={area.title}
                      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* News Section */}
    <section className="py-20 bg-stone-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-3">Latest</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12">News & Updates</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visibleNews.map((item, index) => {
            // Check if link is internal (starts with # or is a page name)
            const isInternalLink = item.link && (item.link.startsWith('#') || ['team', 'research', 'publications', 'opportunities'].includes(item.link));
            const isExternalLink = item.link && item.link.startsWith('http');

            return (
            <AnimatedSection key={newsStartIndex + index} delay={index * 100}>
              <article className="bg-stone-900/50 border border-stone-800 hover:border-[#9CAF88]/30 transition-colors h-full flex flex-col">
                {/* Image */}
                {item.image && (
                  <div className="aspect-[4/3] overflow-hidden bg-stone-800">
                    {item.enableLink && item.link ? (
                      isInternalLink ? (
                        <button
                          onClick={() => {
                            if (item.link.startsWith('#')) {
                              // For hash links, just use the href behavior
                              window.location.hash = item.link;
                            } else {
                              // For page names like 'team', 'research', etc.
                              setCurrentPage(item.link);
                            }
                          }}
                          className="block w-full h-full cursor-pointer"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
                          />
                        </button>
                      ) : isExternalLink ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
                          />
                        </a>
                      ) : null
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-body text-xs px-2 py-1 bg-[#9CAF88]/10 text-[#9CAF88] tracking-wide uppercase">
                      {item.type}
                    </span>
                    <span className="font-body text-xs text-stone-500">{item.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-stone-400 leading-relaxed">{item.description}</p>
                </div>
              </article>
            </AnimatedSection>
            );
          })}
        </div>

        {/* Navigation buttons for older news */}
        {(hasPrevNews || hasMoreNews) && (
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setNewsStartIndex(Math.max(0, newsStartIndex - newsPerPage))}
              disabled={!hasPrevNews}
              className={`font-body text-sm px-6 py-2 border transition-colors ${
                hasPrevNews
                  ? 'border-[#9CAF88] text-[#9CAF88] hover:bg-[#9CAF88]/10'
                  : 'border-stone-800 text-stone-600 cursor-not-allowed'
              }`}
            >
              ← Previous
            </button>
            <button
              onClick={() => setNewsStartIndex(newsStartIndex + newsPerPage)}
              disabled={!hasMoreNews}
              className={`font-body text-sm px-6 py-2 border transition-colors ${
                hasMoreNews
                  ? 'border-[#9CAF88] text-[#9CAF88] hover:bg-[#9CAF88]/10'
                  : 'border-stone-800 text-stone-600 cursor-not-allowed'
              }`}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </section>

    {/* Contact CTA */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="p-6 md:p-8 border border-[#9CAF88]/30 bg-stone-900/30 text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">Interested in joining?</h2>
            <p className="font-body text-stone-400 text-sm mb-6">
              Reach out if you're interested in computational genomics, evolutionary biology, or conservation.
            </p>
            <button
              onClick={() => setCurrentPage('opportunities')}
              className="font-body text-sm tracking-wide px-7 py-3 teal-bg text-stone-950 font-medium hover:bg-[#b8c4a8] transition-colors"
            >
              View Opportunities
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Useful Links */}
    <section className="py-16 bg-stone-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <p className="font-body text-sm tracking-[0.25em] uppercase text-stone-500 mb-6">Useful Links</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://cals.cornell.edu/computational-biology" target="_blank" rel="noopener noreferrer" className="font-body text-sm px-5 py-3 border border-stone-700 text-stone-300 hover:border-[#9CAF88]/50 transition-colors">
              Cornell Computational Biology
            </a>
            <a href="https://gradschool.cornell.edu/academics/fields-of-study/field/computational-biology/" target="_blank" rel="noopener noreferrer" className="font-body text-sm px-5 py-3 border border-stone-700 text-stone-300 hover:border-[#9CAF88]/50 transition-colors">
              Cornell Graduate Program - Computational Biology
            </a>
            <a href="https://gradschool.cornell.edu/academics/fields-of-study/field/genetics-genomics-and-development/" target="_blank" rel="noopener noreferrer" className="font-body text-sm px-5 py-3 border border-stone-700 text-stone-300 hover:border-[#9CAF88]/50 transition-colors">
              Cornell Graduate Program - GGD
            </a>
            <a href="https://www.ccgproject.org/" target="_blank" rel="noopener noreferrer" className="font-body text-sm px-5 py-3 border border-stone-700 text-stone-300 hover:border-[#9CAF88]/50 transition-colors">
              CA Conservation Genomics Project
            </a>
            <a href="https://github.com/harvardinformatics/snpArcher" target="_blank" rel="noopener noreferrer" className="font-body text-sm px-5 py-3 border border-stone-700 text-stone-300 hover:border-[#9CAF88]/50 transition-colors">
              snpArcher Pipeline
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
  );
};

// RESEARCH PAGE
const ResearchPage = ({ activeSection }) => {
  const sectionRefs = useRef({});

  useEffect(() => {
    if (activeSection && sectionRefs.current[activeSection]) {
      setTimeout(() => {
        sectionRefs.current[activeSection].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [activeSection]);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-stone-900/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-4">Our Work</p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold mb-6">Research</h1>
            <p className="font-body text-xl text-stone-400 max-w-3xl leading-relaxed">
              We combine computational genomics with field research to study adaptation, speciation, & conservation across a variety of taxa.
              Most current projects involve birds. We partner with collaborators worldwide to carry out community-engaged research.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-32">
            {labData.researchAreas.map((area, index) => (
              <div 
                key={area.id} 
                id={area.id} 
                ref={el => sectionRefs.current[area.id] = el}
                className="scroll-mt-24"
              >
                <AnimatedSection>
                  <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="aspect-[4/3] overflow-hidden sticky top-24">
                        <img src={area.image} alt={area.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <h2 className="font-display text-3xl md:text-4xl font-semibold mb-2">{area.title}</h2>
                      <p className="font-body text-sm teal-accent mb-6">{area.subtitle}</p>
                      <p className="font-body text-stone-300 leading-relaxed mb-8">{area.description}</p>
                      
                      {area.sections.map((section, i) => (
                        <div key={i} className="mb-8">
                          <h3 className="font-display text-xl font-medium mb-3">{section.title}</h3>
                          <p className="font-body text-stone-400 leading-relaxed text-sm">{section.content}</p>
                        </div>
                      ))}

                      {area.genomes && (
                        <div className="mb-8">
                          <h4 className="font-body text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">Genome Assemblies</h4>
                          <div className="flex flex-wrap gap-2">
                            {area.genomes.map((genome, i) => (
                              <a 
                                key={i}
                                href={genome.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-body text-xs px-3 py-2 bg-stone-800/50 text-stone-300 border border-stone-700 hover:border-[#9CAF88]/40 transition-colors"
                              >
                                {genome.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <h4 className="font-body text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">Selected Publications</h4>
                      <div className="space-y-3">
                        {area.publications.map((pub, i) => (
                          <div key={i} className="pl-4 border-l-2 border-stone-700 hover:border-[#9CAF88]/50 transition-colors">
                            <p className="font-body text-sm text-stone-200 mb-1">{pub.title}</p>
                            <p className="font-body text-xs text-stone-500">
                              <span className="italic">{pub.journal}</span> · {pub.year}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 bg-stone-900/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-3">Tools</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-10">Methods & Pipelines</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={100}>
              <div className="p-8 border border-stone-800 bg-stone-900/30">
                <h3 className="font-display text-xl font-semibold mb-3">snpArcher</h3>
                <p className="font-body text-stone-400 text-sm leading-relaxed mb-4">
                  A fast, reproducible, high-throughput variant calling workflow for population genomics. Designed for scalability in cloud environments.
                </p>
                <a href="https://github.com/harvardinformatics/snpArcher" target="_blank" rel="noopener noreferrer" className="font-body text-sm teal-accent hover:text-[#b8c4a8] transition-colors link-underline">
                  View on GitHub →
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="p-8 border border-stone-800 bg-stone-900/30">
                <h3 className="font-display text-xl font-semibold mb-3">Tn5 Library Prep Protocol</h3>
                <p className="font-body text-stone-400 text-sm leading-relaxed mb-4">
                  High-throughput library preparation technique for creating WGS libraries at roughly $2/sample at 400 samples per day.
                </p>
                <a href="https://protocols.io" target="_blank" rel="noopener noreferrer" className="font-body text-sm teal-accent hover:text-[#b8c4a8] transition-colors link-underline">
                  View on protocols.io →
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

// PUBLICATIONS PAGE
// UPDATED PUBLICATIONS PAGE COMPONENT
// Find the PublicationsPage component in your App.jsx (around line 560) and replace it with this:

// PUBLICATIONS PAGE
const PublicationsPage = () => {
  const years = [...new Set(labData.publications.map(p => p.year))].sort((a, b) => b - a);
  
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-body text-sm tracking-[0.25em] uppercase sage-accent mb-4">Research Output</p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold mb-6">Publications</h1>
            <div className="flex gap-6 items-center">
              <a 
                href="https://scholar.google.com/citations?user=3bBANnkAAAAJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-body text-sm sage-accent hover:text-[#b8c4a8] transition-colors link-underline"
              >
                Google Scholar →
              </a>
              <span className="text-stone-700">|</span>
              <p className="font-body text-stone-500 text-sm">† denotes equal contribution</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {years.map((year, yearIndex) => (
            <AnimatedSection key={year} delay={yearIndex * 50}>
              <div className="mb-16">
                <h2 className="font-display text-3xl font-semibold sage-accent mb-8 sticky top-20 bg-stone-950 py-2 z-10">
                  {year}
                </h2>
                <div className="space-y-6">
                  {labData.publications.filter(p => p.year === year).map((pub, index) => (
                    <article 
                      key={index} 
                      className="pl-5 border-l-2 border-stone-800 hover:border-[#9CAF88]/60 transition-colors"
                    >
                      {pub.link ? (
                        <a 
                          href={pub.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-display text-lg font-medium mb-2 leading-snug block hover:text-[#9CAF88] transition-colors"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        <h3 className="font-display text-lg font-medium mb-2 leading-snug">
                          {pub.title}
                        </h3>
                      )}
                      <p className="font-body text-sm text-stone-500 mb-1">
                        {pub.authors}
                      </p>
                      <p className="font-body text-sm text-stone-400">
                        <span className="italic">{pub.journal}</span>
                        {pub.note && <span className="text-[#9CAF88]/70 ml-2">· {pub.note}</span>}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
};

// TEAM PAGE
const TeamPage = ({ setCurrentPage }) => (
  <>
    <section className="pt-32 pb-16 bg-stone-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-4">Research group at Cornell University</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mb-6">Team</h1>
          <p className="font-body text-xl text-stone-400 max-w-3xl leading-relaxed">
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* PI Section */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <AnimatedSection>
              <div className="aspect-[3/4] overflow-hidden bg-stone-800 mb-6">
                <img
                  src={labData.team.pi.image}
                  alt={labData.team.pi.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-2">
            <AnimatedSection delay={100}>
              <p className="font-body text-xs tracking-[0.2em] uppercase teal-accent mb-2">Principal Investigator</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-2">{labData.team.pi.name}</h2>
              <p className="font-body text-stone-400 mb-6">{labData.team.pi.title}</p>
              <p className="font-body text-stone-300 leading-relaxed mb-8">{labData.team.pi.bio}</p>
              
              <h3 className="font-body text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">Education & Positions</h3>
              <div className="space-y-3 mb-8">
                {labData.team.pi.education.map((edu, i) => (
                  <div key={i} className="flex gap-4 text-sm">
                    <span className="font-body text-stone-600 w-20 shrink-0">{edu.years}</span>
                    <div>
                      <span className="font-body text-stone-200">{edu.place}</span>
                      <p className="font-body text-stone-500 text-xs mt-0.5">{edu.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="mailto:enbody@cornell.edu" className="font-body text-sm teal-accent hover:text-[#b8c4a8] transition-colors link-underline">Email</a>
                <a href="https://scholar.google.com/citations?user=3bBANnkAAAAJ" target="_blank" rel="noopener noreferrer" className="font-body text-sm teal-accent hover:text-[#b8c4a8] transition-colors link-underline">Google Scholar</a>
                <a href="https://github.com/erikenbody" target="_blank" rel="noopener noreferrer" className="font-body text-sm teal-accent hover:text-[#b8c4a8] transition-colors link-underline">GitHub</a>
                <a href="https://erikenbody.github.io/enbody-cv/" target="_blank" rel="noopener noreferrer" className="font-body text-sm teal-accent hover:text-[#b8c4a8] transition-colors link-underline">Full CV</a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>

    {/* Current Members */}
    <section className="py-20 bg-stone-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-3">Current</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-10">Lab Members</h2>
        </AnimatedSection>

        <div className="space-y-12 mb-16">
          {labData.team.members.map((member, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="grid lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                  <div className="aspect-[3/4] overflow-hidden bg-stone-800">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <p className="font-body text-xs tracking-[0.2em] uppercase teal-accent mb-2">{member.role}</p>
                  <h3 className="font-display text-2xl font-semibold mb-2">{member.name}</h3>
                  <p className="font-body text-sm text-stone-400 mb-4">{member.note}</p>
                  <p className="font-body text-xs text-stone-600">{member.years}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <h3 className="font-body text-xs tracking-[0.2em] uppercase text-stone-500 mb-6">Former Mentees & Alumni</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {labData.team.alumni.map((member, i) => (
              <div key={i} className="p-4 border border-stone-800/50">
                <p className="font-body text-sm text-stone-300">{member.name}</p>
                <p className="font-body text-xs text-stone-500">{member.note}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

// OPPORTUNITIES PAGE
const OpportunitiesPage = () => (
  <>
    <section className="pt-32 pb-16 bg-stone-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-4">Join Us</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mb-6">Opportunities</h1>
          <p className="font-body text-xl text-stone-400 max-w-3xl leading-relaxed">
            We're always looking for motivated students interested in evolutionary biology, conservation, and computational genomics to join the group.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Current Openings */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="p-10 md:p-14 border-2 border-[#9CAF88]/40 bg-[#9CAF88]/5 mb-16">
            {/* <span className="font-body text-xs tracking-[0.2em] uppercase teal-accent mb-4 block">Now Recruiting</span> */}
            <h2 className="font-display text-3xl font-semibold mb-4">Graduate Students</h2>
            <p className="font-body text-stone-300 leading-relaxed mb-6">
              Interested students should reach out to inquire about opportunities in evolutionary and conservation genomics. 
            </p>
            <p className="font-body text-stone-400 leading-relaxed mb-8">
              I recruit doctoral students through the Computational Biology or Genetics, Genomics, and Development fields at Cornell.
            </p>
            <a 
              href="mailto:enbody@cornell.edu" 
              className="inline-block font-body text-sm tracking-wide px-8 py-4 teal-bg text-stone-950 font-medium hover:bg-[#b8c4a8] transition-colors"
            >
              Contact to Discuss
            </a>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection delay={100}>
            <div className="p-8 border border-stone-800 bg-stone-900/30">
              <h3 className="font-display text-xl font-semibold mb-4">Postdoctoral Researchers</h3>
              <p className="font-body text-stone-400 text-sm leading-relaxed mb-4">
                We are always looking for motivated postdoctoral researchers to join the lab. When funding is not currently available, I am happy to support internal or external postdoctoral fellowship opportunities. 
              </p>
              <a href="mailto:enbody@cornell.edu" className="font-body text-sm teal-accent hover:text-[#b8c4a8] transition-colors link-underline">
                Inquire about positions →
              </a>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="p-8 border border-stone-800 bg-stone-900/30">
              <h3 className="font-display text-xl font-semibold mb-4">Undergraduate Researchers</h3>
              <p className="font-body text-stone-400 text-sm leading-relaxed mb-4">
                Cornell undergraduates interested in gaining research experience in computational biology are welcome to inquire. Projects may involve bioinformatics, data analysis, or fieldwork depending on interests and lab needs.
              </p>
              <a href="mailto:enbody@cornell.edu" className="font-body text-sm teal-accent hover:text-[#b8c4a8] transition-colors link-underline">
                Inquire about positions →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Contact Info */}
    <section className="py-20 bg-stone-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-4">Get in Touch</p>
          <h2 className="font-display text-3xl font-semibold mb-6">Contact</h2>

          <div className="space-y-6">
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-stone-600 mb-2">Email</p>
              <a href="mailto:enbody@cornell.edu" className="font-display text-2xl hover:text-[#9CAF88] transition-colors">
                enbody@cornell.edu
              </a>
            </div>
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-stone-600 mb-2">Location</p>
              <p className="font-body text-stone-300">
                Department of Computational Biology<br />
                Atkinson Hall<br />
                Cornell University<br />
                Ithaca, New York
              </p>
            </div>
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-stone-600 mb-2">Connect</p>
              <div className="flex gap-6 font-body text-sm">
                <a href="https://github.com/erikenbody" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-100 transition-colors link-underline">GitHub</a>
                <a href="https://scholar.google.com/citations?user=3bBANnkAAAAJ" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-100 transition-colors link-underline">Google Scholar</a>
                <a href="https://bsky.app/profile/erikenbody.bsky.social" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-100 transition-colors link-underline">Bluesky</a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

  </>
);

// MAIN APP
export default function EnbodyLabWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [researchSection, setResearchSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'research': return <ResearchPage activeSection={researchSection} />;
      case 'publications': return <PublicationsPage />;
      case 'team': return <TeamPage setCurrentPage={setCurrentPage} />;
      case 'opportunities': return <OpportunitiesPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} setResearchSection={setResearchSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 overflow-x-hidden">
      <style>{`
        .font-display { font-family: 'freight-sans-pro', sans-serif; }
        .font-body { font-family: 'freight-sans-pro', sans-serif; }
        
        .grain {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 1000;
          opacity: 0.02;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }
        
        .hero-gradient {
          background: linear-gradient(160deg, rgba(28, 25, 23, 0.55) 0%, rgba(41, 37, 36, 0.45) 40%, rgba(28, 25, 23, 0.60) 100%);
        }
        
        .teal-accent { color: #9CAF88; }
        .teal-bg { background-color: #9CAF88; }
        .teal-border { border-color: #9CAF88; }
        
        .nav-blur {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .float-animation { animation: float 5s ease-in-out infinite; }
        
        .link-underline { position: relative; }
        .link-underline::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: #9CAF88;
          transition: width 0.3s ease;
        }
        .link-underline:hover::after { width: 100%; }
        
        .card-hover {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-4px);
        }
      `}</style>

      <div className="grain" />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} scrollY={scrollY} />
      
      <main>
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}

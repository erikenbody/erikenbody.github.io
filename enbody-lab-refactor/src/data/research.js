export const researchAreas = [
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
        { title: "Rapid adaptive radiation of Darwin's finches depends on ancestral genetic modules", journal: "Science Advances 8(27)", year: "2022", link: "https://doi.org/10.1126/sciadv.abm5982" },
        { title: "A multispecies BCO2 beak color polymorphism in the Darwin's finch radiation", journal: "Current Biology", year: "2021", link: "https://doi.org/10.1016/j.cub.2021.09.085" },
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
      description: "We carry out population genomic projects to develop scalable, reproducible pipelines and viable metrics for conservation genomics. By making high-throughput genomic analysis accessible, we can better understand and protect biodiversity in the face of climate change.",
      sections: [
        {
          title: "California Conservation Genomics Project",
          content: "We work closely with the California Conservation Genomics Project to implement conservation genomic applications. This consortium aims to produce the most comprehensive multispecies genomic dataset ever assembled to help manage and protect regional biodiversity in the face of climate change. Erik worked with Russ Corbett-Detig to lead the bioinformatics team and carry out comparative genomics analyses for conservation applications and workflows for high throughput analysis in the cloud of massive genomic datasets."
        },
        {
          title: "Genome Assemblies",
          content: "We have contributed to the generation of novel resources for genomic studies on various non-model species. These state-of-the-art genome assemblies are chromosome scale and include high quality genome annotations."
        }
      ],
      projects: [
        { name: "California Conservation Genomics Project", link: "https://www.ccgproject.org/" }
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
        { title: "Limited genomic signatures of population collapse in the critically endangered black abalone", journal: "Molecular Ecology", year: "2024", link: "https://doi.org/10.1111/mec.17362" },
        { title: "Patterns of Genetic Diversity Within Three California Quail Species Are Best Explained by Climate and Landscape Changes", journal: "Molecular Ecology 34(20)", year: "2025", link: "https://doi.org/10.1111/mec.70093" }
      ]
    },
    {
      id: "plumage-evolution",
      title: "Plumage Evolution",
      subtitle: "The genomic basis of color variation in birds",
      image: "/images/feather.jpg",
      homeImage: "/images/wsfw.jpg",
      description: "We use genomics and field research to understand how plumage coloration evolves in birds. This work spans from the evolution of female ornamentation to the genetic architecture of color polymorphisms across species.",
      sections: [
        {
          title: "White-shouldered Fairywren",
          content: "We study the role of selection in the evolution of female plumage ornamentation in the White-shouldered Fairywren of New Guinea. In this species, different populations vary in the degree of ornamentation in female but not male plumage. We use the White-shouldered Fairywren as a model to test hypotheses for the evolution of female ornamentation, because the degree to which selection (sexual or otherwise) acts on female ornamentation is both poorly understood and controversial. In this international collaboration, we have described the evolutionary history of the various subspecies, examined evidence for selection on female ornamentation using genomics, and the proximate mechanisms shaping signal production."
        },
        {
          title: "Wagtail Plumage Diversification",
          content: "We work with Per Alström to study the evolution of plumage coloration in Motacilla wagtails. The wagtails group of colorful passerine birds are common across Europe, Asia, and Africa. Several species are characterized by large variation in plumage coloration, but little genetic divergence. We leverage these features to study the processes that have generated such dramatic variation in plumage signals."
        },
      ],
      publications: [
        { title: "The evolutionary history and mechanistic basis of female ornamentation in a tropical songbird", journal: "Evolution 76(8):1720-1736", year: "2022", link: "https://doi.org/10.1111/evo.14545" },
        { title: "Asymmetric introgression reveals the genetic architecture of a plumage trait", journal: "Nature Communications", year: "2021", link: "https://www.nature.com/articles/s41467-021-21340-y" },
        { title: "Introgression underlies phylogenetic uncertainty but not parallel plumage evolution in a recent songbird radiation", journal: "Systematic Biology", year: "2023", link: "https://doi.org/10.1093/sysbio/syad062" },
        { title: "Genetic basis and evolution of structural color polymorphism in an Australian songbird", journal: "Molecular Biology and Evolution", year: "2024", link: "https://doi.org/10.1093/molbev/msae046" },
        { title: "Female ornamentation is associated with elevated aggression and testosterone in a tropical songbird", journal: "Behavioral Ecology 29(5)", year: "2018", link: "https://doi.org/10.1093/beheco/ary079" }
      ]
    }
  ];

import {Project } from '../components/ProjectCard';
import CibleImg from '../assets/Cible.png';
import CTF from '../assets/ctf.png';
import SHELL from '../assets/shell.png';
import ndi from '../assets/ndi.png';
import crypt from '../assets/crypto.png';
import courses from '../assets/courses.png';
export const projects: Project[] = [
  {
    title: 'Recurves Simulator',
    image: CibleImg,
    description: 'Simulation de points pour le tir à l’arc en Java, réalisée avec l’IDE Eclipse. Les tirs sont représentés par des points de taille adaptée, et les coordonnées des impacts sont récupérées pour calculer le nombre de points obtenus en fonction de la zone touchée. Les bullseyes ne sont pris en compte qu’en cas d’égalité. Le tout est réalisé à l’aide du module JavaFX.',
    link: 'https://github.com/Zetsukiss/Cible'
  },
  {
    title: 'CTF Walkthrough',
    image: CTF,
    description: 'Cette section regroupe les CTF que j’ai réalisés, classés par catégorie (web, réseau, forensic, etc.), ainsi que des walkthroughs personnels détaillant la démarche et les étapes qui m’ont permis de résoudre chaque challenge.',
    link: 'https://github.com/Zetsukiss/CTF'
  },
  {
    title: 'Mini shell',
    image: SHELL,
    description: 'Projet C visant à reproduire les principales caractéristiques d’un shell Unix, notamment la gestion des pipelines, des redirections (<, <<) ainsi que certaines commandes spécifiques.',
    link: 'https://github.com/Zetsukiss/Mini-shell'
  },
  {
    title: 'Site Web nuit de l\'info',
    image: ndi,
    description: "La nuit de l'info est un événement national où le but est de créer un site web suivant des règles spéciales. On choisit 5 défis en plus du principal à relever et on doit implémenter ça dans le site web, tout cela en 1 nuit. La participation à la nuit de l'info doit être d'au moins 2 mini.",
    link: 'https://ndi.le-lan.net/'
  },
  {
    title: 'Project cryptis',
    image: crypt,
    description: "Le but de ce projet était de recréer un logiciel de cryptographie. L’utilisateur saisit un message à chiffrer, chaque caractère (lettre ou chiffre) étant associé à un tableau de valeurs comprises entre -1 et 1 (par exemple, d = [-1, 1, 0, 0]). Des opérations de rotation et d’inversion, via les touches directionnelles et Q, S, W, D, sont appliquées à ces tableaux. Elles servent à la génération des clés, au chiffrement et au déchiffrement du message. Le système repose sur une clé publique et une clé privée, l’objectif étant que le détenteur de la clé privée retrouve le message avec un minimum d’essais.",
    link: 'https://github.com/Zetsukiss/Crypto'
  },
  {
    title: 'Online courses',
    image: courses,
    description: "Ce répertoire regroupe l’ensemble des certifications que j’ai suivies, illustrant mon engagement à développer mes compétences en cybersécurité et technologies associées. Chaque certificat montre les connaissances acquises et les projets réalisés au cours de ces formations.",
    link: 'https://github.com/Zetsukiss/Online-learning-certifcat'
  }
  
];

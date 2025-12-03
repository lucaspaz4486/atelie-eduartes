import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Mandala {
  id: number;
  title: string;
  image: string;
  meaning: string;
  color: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'Ateliê Edu@rtes';
  whatsappNumber = '5561993227911';

  mandalas: Mandala[] = [
    {
      id: 1,
      title: 'Gaia Dourada',
      image: '/assets/images/mandala1.png',
      meaning: 'A conexão profunda com a Terra e a sabedoria da natureza.',
      color: 'Dourado e Laranja'
    },
    {
      id: 2,
      title: 'Sol Interior',
      image: 'assets/images/mandala2.png',
      meaning: 'Simboliza a energia vital, criatividade e a conexão com o universo.',
      color: 'Vermelho e Prata'
    },
    {
      id: 3,
      title: 'Oceano de Paz',
      image: 'assets/images/mandala3.png',
      meaning: 'Utilizada para meditação profunda, acalma a mente e reduz a ansiedade.',
      color: 'Azul e Turquesa'
    },
    {
      id: 4,
      title: 'Luz da Intuição',
      image: 'assets/images/mandala4.png',
      meaning: 'Desperta a visão interior e a conexão com o plano espiritual.',
      color: 'Azul e Roxo'
    },
    {
      id: 5,
      title: 'Manto de Esperança',
      image: 'assets/images/mandala5.png',
      meaning: 'Une a proteção do manto azul com a energia de cura e esperança do verde. Representa o acolhimento materno.',
      color: 'Verde, Prata e Azul'
    },
    {
      id: 6,
      title: 'Vinha de Luz',
      image: 'assets/images/mandala6.png',
      meaning: 'Inspirada na força da natureza que cresce e busca a luz. Traz vitalidade e renovação para o ambiente.',
      color: 'Verde Escuro e Prata'
    },
    {
      id: 7,
      title: 'Rainha da Paz',
      image: 'assets/images/mandala7.png',
      meaning: 'Uma peça que irradia a luz da harmonia familiar e a bênção materna através dos seus reflexos.',
      color: 'Azul, Branco e Dourado'
    },
    {
      id: 8,
      title: 'Força de Áries',
      image: 'assets/images/mandala8.png',
      meaning: 'A coragem e a iniciativa do primeiro signo do zodíaco. Abre caminhos e traz liderança.',
      color: 'Laranja e Vermelho'
    },
    {
      id: 9,
      title: 'Equilíbrio de Luz',
      image: 'assets/images/mandala9.png',
      meaning: 'A harmonia perfeita entre forças opostas. O espelho reflete a luz, lembrando que a paz interior depende da integração das nossas dualidades.',
      color: 'Prata e Branco'
    },
    {
      id: 10,
      title: 'Escudo Negro',
      image: 'assets/images/mandala10.png',
      meaning: 'O preto absorve energias densas, enquanto os espelhos prateados refletem e afastam a negatividade, criando um campo de proteção.',
      color: 'Preto e Prata'
    },
    {
      id: 11,
      title: 'Oásis de Cristal',
      image: 'assets/images/mandala11.png',
      meaning: 'A união da terra (bege) com as águas (azul), criando um refúgio de frescor e renovação para o espírito.',
      color: 'Bege, Azul e Prata'
    },
    {
      id: 12,
      title: 'Sol Místico',
      image: 'assets/images/mandala12.png',
      meaning: 'Um sol que irradia não apenas calor físico, mas também luz espiritual e intuição através do seu centro violeta.',
      color: 'Vermelho, Laranja e Roxo'
    },
    {
      id: 13,
      title: 'Profundeza da Alma',
      image: 'assets/images/mandala13.png',
      meaning: 'Um convite para olhar para dentro, para o desconhecido, e encontrar a sua própria verdade refletida.',
      color: 'Azul, Preto e Prata'
    },
    {
      id: 14,
      title: 'Estrela da Noite',
      image: 'assets/images/mandala14.png',
      meaning: 'Representa a luz da intuição e da esperança que brilha mesmo nos momentos mais escuros. Traz clareza e guia.',
      color: 'Preto e Prata'
    },
    {
      id: 15,
      title: 'Luar Celestial',
      image: 'assets/images/mandala15.png',
      meaning: 'A conexão com o divino e o infinito. O azul traz a paz do céu noturno e a prata o brilho da intuição e das estrelas.',
      color: 'Azul e Prata'
    },
    {
      id: 16,
      title: 'Sabedoria Divina',
      image: 'assets/images/mandala18.png',
      meaning: 'O azul estimula a intuição e a verdade, enquanto o dourado conecta com a sabedoria superior e a iluminação.',
      color: 'Azul, Dourado e Prata'
    },
    {
      id: 17,
      title: 'Coração Rubro-Negro',
      image: 'assets/images/mandala19.png',
      meaning: 'Representa a paixão ardente, a lealdade e a energia vibrante que move multidões.',
      color: 'Vermelho e Preto'
    },
    {
      id: 18,
      title: 'Guardião dos Sonhos',
      image: 'assets/images/mandala20.png',
      meaning: 'Peça suspensa que filtra as energias do ambiente e protege o sono. Deixa passar apenas os bons sonhos.',
      color: 'Multicolorido'
    },
    {
      id: 19,
      title: 'Conexão Natural',
      image: 'assets/images/mandala21.png',
      meaning: 'A união perfeita entre o plano material (terra/bege) e o plano espiritual (céu/azul), refletida pela luz dos espelhos.',
      color: 'Bege, Azul e Prata'
    },
    {
      id: 20,
      title: 'Escudo Negro',
      image: 'assets/images/mandala23.png',
      meaning: 'O preto absorve energias densas, enquanto os espelhos prateados refletem e afastam a negatividade, criando um campo de proteção.',
      color: 'Preto e Prata'
    },
    {
      id: 21,
      title: 'Prisma de Luz',
      image: 'assets/images/mandala26.png',
      meaning: 'Assim como a luz branca que se divide em todas as cores, esta peça representa a plenitude e a conexão com o todo.',
      color: 'Multicolorido'
    },
    {
      id: 22,
      title: 'Sol da Vitalidade',
      image: 'assets/images/mandala29.png',
      meaning: 'Uma explosão de energia solar que une a alegria do amarelo com a criatividade do laranja.',
      color: 'Amarelo, Laranja e Prata'
    }
  ];

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
  audio = new Audio();
  isPlaying = false;
  isMuted = false;

  constructor() {
    // Configura a música
    this.audio.src = 'assets/audio/zen-music.mp3';
    this.audio.load();
    this.audio.loop = true; // Para tocar em loop
    this.audio.volume = 0.5; // 50% de volume inicial
  }

  // Tocar / Pausar
  toggleMusic() {
    if (this.audio.paused) {
      this.audio.play();
      this.isPlaying = true;
    } else {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  // Mudo / Com Som
  toggleMute() {
    this.isMuted = !this.isMuted;
    this.audio.muted = this.isMuted;
  }

  openWhatsapp(mandalaTitle: string) {
    const message = `Olá! Gostaria de saber mais informações sobre a peça "${mandalaTitle}" que vi no site.`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  }

  // Função do Botão de Contato Geral (Rodapé)
  contactWhatsapp() {
    const message = "Olá! Vim através do site e gostaria de falar com o Ateliê.";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  }

  // Função do Instagram
  openInstagram() {
    // Link do Eduarts Artes
    const url = 'https://www.instagram.com/eduarts_artes?utm_source=qr&igsh=MW5qbG54cWJjZjMyMw%3D%3D';
    window.open(url, '_blank');
  }

  // Facebook (Eduardo Eruz)
  openFacebook() {
    // Link do Facebook fornecido
    const url = 'https://www.facebook.com/eduardo.eruz?rdid=Cli4Q4XHFTqkiJTC&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1D7HvEwAK3%2F';
    window.open(url, '_blank');
  }
}
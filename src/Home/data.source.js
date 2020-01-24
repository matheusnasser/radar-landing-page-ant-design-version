import React from 'react';

import radarMac from  '../assets/mac.png';
import radarSonar from  '../assets/sonarbackground.png';
import radarLogo from "../assets/radar-logo.png";


import produtor from  '../assets/produtor-rural.png';
import cooperativa from "../assets/COOPERATIVA.png";
import corretora from "../assets/CORRETORA.png"


import info from "../assets/info.png";
import conexao from "../assets/conexao.png";
import globe from "../assets/globe.svg";
import opportunities from "../assets/opportunities.svg";
import agreement from "../assets/agreement.png";
import stock from "../assets/stock.svg";



export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: null
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '#Nav0_0',
          children: [{ children: 'Home', name: 'text' }],
        },
        
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '#Content1_0',
          children: [{ children: 'Plataforma', name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '#Content0_0',
          children: [{ children: 'Perfis', name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '#Content3_0',
          children: [{ children: 'Beneficios', name: 'text' }],
        },
      },
      {
        name: 'item4',
        className: 'header0-item',
        children: {
          href: "#Feature2_0",
          children: [{ children: 'Contato', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};

// #Content1_0
export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: (
      <img src={radarLogo} className="radarLogoHeader"></img>
    ),
  },
  content: {
    className: 'banner0-content',
    children: null,
  },
  button: { className: 'banner0-button', children: 'Cadastre-se agora!', href: "http://radaragro.io/" },
  buttonSign: { className: 'banner0-button', children: 'Entrar na plataforma!', href: "http://radaragro.io/" },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'Conheça os Perfis' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: (
                <img src={produtor}></img>
              ),
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Produtor Rural',
            },
            { name: 'content', children: 'Você poderá visualizar oportunidades para comprar os insumos com os melhores preços, publicar seus produtos para venda e localizar indústrias, corretoras e outros produtores rurais que estão ao seu redor.' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: (
                <img src={corretora}></img>
              ),
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Corretora',
            },
            {
              name: 'content',
              children: 'Suas compras e vendas terão ainda mais velocidade, com a plataforma você poderá conectar com várias oportunidades que estão próximas e também em regiões que você atende. Disponibilizamos dados de relevância para logística, comercialização e exportação.',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: (
                <img src={cooperativa}></img>
              ),
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Cooperativa',
            },
            {
              name: 'content',
              children: 'Unir forças é o seu forte, por isso a plataforma reúne para você as melhores ofertas para negociar com rapidez e assertividade, a fim de fazer negócios ainda melhores, unindo forças em uma única plataforma que potencializa compras e vendas de produtos agrícolas.',
            },
          ],
        },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24   },
  img: {
    children: radarMac,
    className: 'radar-mac'
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: { className: 'content1-title', children: null, },
  content: {
    className: 'content1-content',
    children:
    "Chegou a plataforma que irá revolucionar a comercialização agrícola brasileira e mundial. Através do ambiente disponibilizado na plataforma vendedores e compradores se conectam para realizarem negócios. Comece agora a visualizar todas as oportunidades na vitrine de preços Radar.",
  },
};


export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'Conheça os Benefícios',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: null,
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              opportunities,
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Oportunidades' },
          content: {
            className: 'content3-content',
            children:
              'Através da plataforma você terá acesso a diversas oportunidades de negócios relacionadas a produtos e insumos de seu interesse.',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              globe,
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Mapa Interativo' },
          content: {
            className: 'content3-content',
            children:
              "Contempla na plataforma um mapa interativo, por meio dele se obtém a localização de cada oportunidade, e de várias outras variáveis geolocalizadas.",
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              conexao,
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Interação' },
          content: {
            className: 'content3-content',
            children:
              'É possível a interação entre os usuários, para ampliar os contatos e gerar ainda mais oportunidades de negócios.',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              agreement,
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Agilidade' },
          content: {
            className: 'content3-content',
            children:
              'Em poucos cliques e sem nenhuma complicação você entrará em contato com oportunidades de diversas regiões, de forma rápida, fácil e segura.',
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              stock,
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Acompanhamento' },
          content: {
            className: 'content3-content',
            children:
              'Acompanhe as oportunidades e o preço de commodities agrícolas dia após dia.',
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              info,
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Informações' },
          content: {
            className: 'content3-content',
            children:
              'Visando a praticidade e rapidez o Radar une em uma única plataforma as informações do seu interesse, que irão alavancar seus negócios.',
          },
        },
      },
    ],
  },
};
export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: radarSonar,
    className: 'image-contato'
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: { className: 'content2-title', children: 'Entre em contato.' },
  content: {
    className: 'content2-content',
    children: (
      <span>Entre em contato com a nossa equipe, estamos a disposição para lhe atender. <br></br><strong>Email: contatoradar@radar.io</strong><br></br><strong>Tel: (34) 9 9910-2608 </strong></span>
    ),
  },
  

};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
        <span>
          ©2020 <a>BKPI</a> All Rights
          Reserved
        </span>
    ),
  },
};

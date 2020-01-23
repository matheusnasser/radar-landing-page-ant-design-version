import React from 'react';
import radarLogo from "../assets/sonarbackground.png";
import radarMac from  '../assets/mac.png';
import radarSonar from  '../assets/sonarbackground.png';
const radarLogoHeader = require("../assets/radar-logo.png")

export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: radarLogoHeader,
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '导航一', name: 'text' }],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '导航二', name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '导航三', name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '导航四', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};


export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: "https://i.ibb.co/SDSc9Bf/radar-logo.png",
  },
  content: {
    className: 'banner0-content',
    children: null,
  },
  button: { className: 'banner0-button', children: 'Learn More' },
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
              children: 'https://i.ibb.co/PrJV06H/PRODUTOR-RURAL.png'
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
              children:
                'https://i.ibb.co/PrJV06H/PRODUTOR-RURAL.png',
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
              children:
                'https://i.ibb.co/PrJV06H/PRODUTOR-RURAL.png',
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
  imgWrapper: { className: 'content1-img', md: 24, xs: 24   },
  img: {
    children: radarMac,
    className: 'radar-mac'
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 0 },
  title: { className: 'content1-title', children: null },
  content: {
    className: 'content1-content',
    children:
      null,
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
        children: 'Que o radar oferece',
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
              'https://image.flaticon.com/icons/svg/1152/1152946.svg',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Oportunidades' },
          content: {
            className: 'content3-content',
            children:
              'Dentro do radar você terá acesso a diversas oportunidades de negócios relacionadas a produtos e insumos de seu interesse.',
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
              'https://image.flaticon.com/icons/svg/814/814587.svg',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Mapa Interativo' },
          content: {
            className: 'content3-content',
            children:
              "O radar contém também com um mapa onde apresenta oportunidades.",
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
              'https://cdn.icon-icons.com/icons2/1387/PNG/512/distributedcloudblockchaintechnologynetworkconnection_95916.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Interação' },
          content: {
            className: 'content3-content',
            children:
              'É possível também dentro do radar interagir com outros usuários, tanto de cooperativas, corretoras e indústrias, gerando assim uma ampla conexão entre usuários e oportunidades.',
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
              'https://cdn.icon-icons.com/icons2/1765/PNG/512/hand-outline-gesture-3_113964.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Agilidade' },
          content: {
            className: 'content3-content',
            children:
              'Com o radar você poderá entrar em contato com oportunidades de forma rápida, fácil e segura tudo a partir de conxão a internet e um computador.',
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
              'https://image.flaticon.com/icons/svg/1743/1743002.svg',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Acompanhamento' },
          content: {
            className: 'content3-content',
            children:
              'Acompanhe o histórico de oportunidades e preço de insumos de sua região dia após dia.',
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
              'https://cdn.icon-icons.com/icons2/1812/PNG/512/4213426-about-description-help-info-information-notification_115427.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Informações' },
          content: {
            className: 'content3-content',
            children:
              'No radar vai ser possível também ter acesso a informações em tempo real sobre esmagadoras e cotações do mercado atual.',
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
      <span>Caso tenha alguma dúvida entre em contato no email <strong>contatoradar@radar.io</strong></span>
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

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './style';

export function Main() {
    const data = useStaticQuery(graphql`
        query {
            alldata {
                mains {
                    sectionTitle
                    cookie1 {
                      url
                    }
                    cookie2 {
                      url
                    }
                    cookie3 {
                      url
                    }
                    name1
                    name2
                    name3
                    btn1
                    btn2
                    btn3
                    divider
                    section2Title
                    img1 {
                      url
                    }
                    img2 {
                      url
                    }
                    img3 {
                      url
                    }
                    img4 {
                      url
                    }
                    img5 {
                      url
                    }
                    img6 {
                      url
                    }
                    img7 {
                      url
                    }
                    img8 {
                      url
                    }
                    showmore
                    carrinho {
                      url
                    }
                  }
            }
        }
    `);

    const {sectionTitle, cookie1, cookie2, cookie3, name1, name2, name3, btn1, btn2, btn3, divider,  section2Title, img1, img2, img3, img4, img5, img6, img7, img8, showmore, carrinho} = data.alldata.mains[0];

    return (
        <S.Container>
          <>
              <S.Title>{sectionTitle}</S.Title>
            <S.SectionTop>
              <S.Cookie>
                <S.img src={cookie1.url} alt="cookie" />
                <S.Paragraph>{name1}</S.Paragraph>
                <S.BuyBtn>
                <S.Btn><S.carticon src={carrinho.url} alt=" cart icon"/>{btn1}</S.Btn>
                </S.BuyBtn>
              </S.Cookie>
              <S.Cookie>
                <S.img src={cookie2.url} alt="cookie" />
                <S.Paragraph>{name2}</S.Paragraph>
                <S.BuyBtn>
                <S.Btn><S.carticon src={carrinho.url} alt=" cart icon"/>{btn2}</S.Btn>
                </S.BuyBtn>
              </S.Cookie>
              <S.Cookie>
                <S.img src={cookie3.url} alt="cookie" />
                <S.Paragraph>{name3}</S.Paragraph>
                <S.BuyBtn>
                  <S.Btn><S.carticon src={carrinho.url} alt=" cart icon"/>{btn3}</S.Btn>
                </S.BuyBtn>
              </S.Cookie>
            </S.SectionTop>
            <S.divider><S.P>{divider}</S.P></S.divider>
            
            <S.Title>{section2Title}</S.Title>
            <S.SectionBottom>
              <S.Img src={img1.url}/>
              <S.Img src={img2.url}/>
              <S.Img src={img3.url}/>
              <S.Img src={img4.url}/>
              <S.Img src={img5.url}/>
              <S.Img src={img6.url}/>
              <S.Img src={img7.url}/>
              <S.Img src={img8.url}/>
            </S.SectionBottom>
            <S.divider2><S.P>{showmore}</S.P></S.divider2>
          </>
        </S.Container>
    );
}

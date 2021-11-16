import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './style';

export function Footer() {
    const data = useStaticQuery(graphql`
        query {
            alldata {
                footers {
                    boxTitle1
                    boxTitle2
                    boxTitle3
                    boxTitle4
                    boxTitle5
                    boxTitle6
                    boxTitle7
                    text11
                    text12
                    text13
                    text21
                    text22
                    text23
                    text31
                    text32
                    text33
                    img41 {
                      url
                    }
                    img42 {
                      url
                    }
                    img43 {
                      url
                    }
                    img44 {
                      url
                    }
                    img45 {
                      url
                    }
                    img46 {
                      url
                    }
                    text51
                    btn52
                    img61 {
                      url
                    }
                    img62 {
                      url
                    }
                    img63 {
                      url
                    }
                    img64 {
                      url
                    }
                    img65 {
                      url
                    }
                    text71
                  }
            }
        }
    `);

    const {boxTitle1, boxTitle2, boxTitle3, boxTitle4, boxTitle5, boxTitle6, boxTitle7, text11, text12, text13, text21, text22, text23, text31, text32, text33, img41, img42, img43, img44, img45, img46, text51, btn52, img61, img62, img63, img64, img65, text71} = data.alldata.footers[0];

    return (
        <S.Container>
         <S.Content>
          <S.FooterContent>
            <S.Title>{boxTitle1}</S.Title>
            <S.Ul>
              <li>{text11}</li>
              <li>{text12}</li>
              <li>{text13}</li>
            </S.Ul>
          </S.FooterContent>
          <S.FooterContent>
            <S.Title>{boxTitle2}</S.Title>
            <S.Ul>
              <li>{text21}</li>
              <li>{text22}</li>
              <li>{text23}</li>
            </S.Ul>
          </S.FooterContent>
          <S.FooterContent>
            <S.Title>{boxTitle3}</S.Title>
            <S.Paragraph>{text31}</S.Paragraph>
            <S.Paragraph>{text32}</S.Paragraph>
            <S.Paragraph>{text33}</S.Paragraph>
          </S.FooterContent>
          <S.FooterContent>
            <S.Title>{boxTitle4}</S.Title>
            <S.Iconsection>
              <S.Icon1 src={img41.url} alt="pay icon"/>
              <S.Icon2 src={img42.url} alt="pay icon"/>
              <S.Icon3 src={img43.url} alt="pay icon"/>
            </S.Iconsection>
            <S.Iconsection2>
              <S.Icon4 src={img44.url} alt="pay icon"/>
              <S.Icon5 src={img45.url} alt="pay icon"/>
              <S.Icon6 src={img46.url} alt="pay icon"/>
            </S.Iconsection2>
          </S.FooterContent>
          <S.FooterContent>
            <S.Title>{boxTitle5}</S.Title>
            <S.Mailbox>
              <S.Paragraph>{text51}</S.Paragraph>
              <S.Input type="text" placeholder="email@gmail.com.br"/>
              <S.Btn>{btn52}</S.Btn>
            </S.Mailbox>
          </S.FooterContent>
          <S.FooterContent>
            <S.Title>{boxTitle6}</S.Title>
            <S.Iconsection3>
              <S.Icon7 src={img61.url} alt="telegramicon"/>
              <S.Icon8 src={img62.url} alt="icon"/>
              <S.Icon9 src={img63.url} alt="icon"/>
            </S.Iconsection3>
            <S.Iconsection3>
              <S.Icon10 src={img64.url} alt="icon"/>
              <S.Icon11 src={img65.url} alt="icon"/>
              <S.div></S.div>
            </S.Iconsection3>
          </S.FooterContent>
          <S.FooterContent>
            <S.Title>{boxTitle7}</S.Title>
            <S.Paragraph2>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://i.pinimg.com/564x/13/e9 /a6/13e9a64fbdfe59d441990d5719060f43.jpg</S.Paragraph2>
          </S.FooterContent>
         </S.Content>
        </S.Container>
    );
}

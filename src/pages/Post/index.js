import React from 'react'
import styled from 'styled-components'
import forest from '../../assets/img/rainForest.jpeg'

const Container = styled.div`
  width: 80%;
  height: max-content;
  min-height: 100vh;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  position: relative;
`

const NavigationContainer = styled.div`
  box-sizing: border-box;

  width: 100%;
  max-width: 945px;
  height: max-content;

  padding: 30px 20px;

  position: relative;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
`

const NavigationDescWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  font-weight: 900;
  font-size: 30px;
  border-bottom: 5px solid white;
`

const PostCategoryWrapper = styled.div`
  width: 100%;
  height: max-content;
  min-height: 50px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  color: black;
`

const PostCategory = styled.div`
  width: max-content;

  padding: 8px 16px;

  border-radius: 40px;
  background: #2a2a2a;
  color: white;

  font-size: 14px;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  top: 0px;

  transition: top 0.3s linear;

  cursor: pointer;

  &:hover{
    top: -3px;
  }
`

const PostContainer = styled.div`
  box-sizing: border-box;

  width: max-content;
  max-width: 945px;
  height: max-content;

  padding: 0px 22px;
  margin-bottom: 50px;

  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px 30px;

  color: white;
`

const PostWrapper = styled.div`
  min-width: 280px;
  min-height: 350px;
  max-height: 350px;

  background: #1e1e1e;
  border-radius: 8px;

  cursor: pointer;
  position: relative;
  top: 0px;

  transition: top 0.3s linear;

  display: flex;
  flex-flow: column nowrap;
  gap: 3px;

  &:hover{
    top: -10px;

  }
`

const ImgContent = styled.img`
  width: 280px;
  height: 140px;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  object-fit: fill;
`

const Title = styled.div`
  box-sizing: border-box;
  width: 280px;

  margin-top: 10px;
  padding: 5px 10px;

  font-size: 20px;

`

const Desc = styled.div`
  box-sizing: border-box;
  width: 280px;
  height: 100px;
  
  padding: 5px 15px;

  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: pre-wrap;

  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
`

const InfoWrapper = styled.div`
  box-sizing: border-box;

  flex: 1;

  margin-top: 10px;
  padding: 0px 15px;

  border-top: 1px solid #2a2a2a;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 5px;
`

const Left = styled.div`
  box-sizing: border-box;

  flex: 1;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 5px;
`

const ProfileImg = styled.img`
  width: 20px;
  height: 20px;

  margin-right: 5px;

  object-fit: cover;

  border-radius: 50%;
`

const UserInfoText = styled.p`
  padding-top: 2px;

  font-size: 12px;
  font-weight: 300;
`

const Category = styled.div`
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  background: #2a2a2a;

  padding: 5px 10px;

  font-size: 12px;
  font-weight: 300; 

  display: flex;
  justify-content: center;
  align-items: center;
`


function Index() {
  const type = new URL(window.location.href).searchParams.get('type');

  return (
    <Container>
      <NavigationContainer>
        <NavigationDescWrapper>
          {type} Archive
        </NavigationDescWrapper>
        <PostCategoryWrapper>
          {['Frontend', 'Awaker', 'Hanyang', 'Forest Asset'].map(function (item) {

            return (
              <PostCategory key={item}>
                {item}
              </PostCategory>
            )
          })}
        </PostCategoryWrapper>
      </NavigationContainer>
      <PostContainer>
          {[{
            post: {
              id: 1,
              category: 'frontend',
              created: 'Sat Mar 26 2022 14:19:48 GMT+0900 (?????? ?????????)',
            },
            user: {
              id: 1,
              name: 'Juno',
              profile: 'http://localhost:3000/assets/rainForest.jpeg'
            }
          },
          {
            post: {
              id: 1,
              category: 'frontend',
              created: 'Sat Mar 26 2022 14:19:48 GMT+0900 (?????? ?????????)'
            },
            user: {
              id: 1,
              name: 'Juno',
              profile: 'http://localhost:3000/assets/rainForest.jpeg'
            }
          },
          {
            post: {
              id: 1,
              category: 'frontend',
              created: 'Sat Mar 26 2022 14:19:48 GMT+0900 (?????? ?????????)'
            },
            user: {
              id: 1,
              name: 'Juno',
              profile: 'http://localhost:3000/assets/rainForest.jpeg'
            }
          },
          {
            post: {
              id: 1,
              category: 'frontend',
              created: 'Sat Mar 26 2022 14:19:48 GMT+0900 (?????? ?????????)'
            },
            user: {
              id: 1,
              name: 'Juno',
              profile: 'http://localhost:3000/assets/rainForest.jpeg'
            }
          }
          ].map(function(item){

            let createdText = item.post.created.split(' ');
            return (
              <PostWrapper>
                <ImgContent src={forest}/>
                <Title>Javascript ?????????</Title>
                <Desc>?????? ?????? ?????? ?????? ????????? ????????? ????????? ????????????. ????????? ???????????? ????????? ?????? ??????????????? ????????? ????????????. ????????? ?????? ????????? ????????? ????????? ???????????? ????????? ???????????? ?????? ???????????????. ???????????? ???????????? ????????? ??? ?????? ???????????????, ????????? ??? ?????? ?????? ???????????? ?????? ????????? ???????????????. ?????? 500?????? ???????????? ?????? ??????????????? ????????? ?????? ?????? ????????? ???????????? ???????????????. </Desc>
                <InfoWrapper>
                  <Left>
                  <ProfileImg src={item.user.profile}/>
                  <UserInfoText>{item.user.name}</UserInfoText>
                  <UserInfoText>/</UserInfoText>
                  <UserInfoText style={{opacity: '0.4'}}>{`${createdText[0]} ${createdText[1]} ${createdText[2]}`}</UserInfoText>
                  </Left>
                  <Category>{item.post.category}</Category>
                </InfoWrapper>
              </PostWrapper>
            )
          })}
      </PostContainer>
    </Container>
  )
}

export default Index

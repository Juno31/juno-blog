import React from 'react'
import styled from 'styled-components'

const PortfolioContainer = styled.div`
  width: 100%;
  height: max-content;
  min-height: 100vh;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;

  position: relative;
`

const NavigationContainer = styled.div`
  width: 20%;
  max-width: 200px;
  height: 100vh;

  position: -webkit-sticky;
  position: sticky;
  top: 0px;

  border: 1px solid black;
`

const PostListContainer = styled.div`
  flex: 1;

  height: max-content;
  min-height: 100vh;

  border: 1px solid blue;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

const PostCategoryWrapper = styled.div`
  width: 80%;
  height: max-content;
  min-height: 50px;

  margin-top: 40px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`

const PostCategory = styled.div`
  width: max-content;

  padding: 8px 16px;

  border-radius: 40px;
  background: rgba(242, 242, 242, 1);

  font-size: 14px;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover{
    background: rgba(242, 242, 242, 2);
  }
`

const PostListWrapper = styled.div`
  width: 80%;
`

const PostWrapper = styled.div`
  width: 80%;
  height: max-content;
  min-height: 130px;

  padding: 30px;

  border-top: 1px solid rgba(230, 230, 230, 1);

  display: flex;
  flex-flow: column nowrap;

`

const UserInfoWrapper = styled.div`
  width: 100%;
  height: 30px;

  display: flex;
  align-items: center;

  gap: 5px;
`

const ProfileImg = styled.img`
  width: 25px;
  height: 25px;

  object-fit: cover;

  border-radius: 50%;
`

const UserInfoText = styled.p`
  padding-top: 2px;
`



function Index() {
  return (
    <PortfolioContainer>
      <NavigationContainer>
        This is Navigation with tools such as write, navigation bar
      </NavigationContainer>
      <PostListContainer>
        <PostCategoryWrapper>
          {['Frontend', 'Awaker', 'Hanyang', 'Forest Asset'].map(function (item) {

            return (
              <PostCategory key={item}>
                {item}
              </PostCategory>
            )
          })}
        </PostCategoryWrapper>
        <PostListWrapper>
          {[{
            post: {
              id: 1,
              category: 'frontend',
              created: 'Sat Mar 26 2022 14:19:48 GMT+0900 (한국 표준시)'
            },
            user: {
              id: 1,
              name: 'Juno',
              profile: 'http://localhost:3000/assets/rainForest.jpeg'
            }
          },
          ].map(function(item){

            let createdText = item.post.created.split(' ');
            return (
            <PostWrapper key={item.id}>
              <UserInfoWrapper>
                <ProfileImg src={item.user.profile}/>
                <UserInfoText>{item.user.name}</UserInfoText>
                <UserInfoText>/</UserInfoText>
                <UserInfoText style={{opacity: '0.4'}}>{`${createdText[0]} ${createdText[1]} ${createdText[2]}`}</UserInfoText>
              </UserInfoWrapper>
            </PostWrapper>
            )
          })}
        </PostListWrapper>
      </PostListContainer>
    </PortfolioContainer>
  )
}

export default Index

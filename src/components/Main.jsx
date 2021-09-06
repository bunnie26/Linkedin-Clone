import React from "react";
import styled from "styled-components";

function Main(props) {
  return (
    <Container>
      <ShareBox>Share</ShareBox>
      <div>
        <img src="/images/user.svg"></img>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSgRZI94ZQlzuE9UMHCjv3MmSqBuwFz8R4uA&usqp=CAU" style={{height:24}}></img> */}
        <button>Start a post</button>
      </div>
      <div>
        <button>
          <img src="/images/photo-icon.svg"></img>
          <span>Photo</span>
        </button>
        <button>
          <img src="/images/video-icon.svg"></img>
          <span>Video</span>
        </button>
        <button>
          <img src="/images/event-icon.svg"></img>
          <span>Event</span>
        </button>
        <button>
          <img src="/images/article-icon.svg"></img>
          <span>Write Article</span>
        </button>
      </div>
    </Container>
  );
}
const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 9px;
  background-color: white;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0px 0px 8px;
  background-color: white;
`;

export default Main;

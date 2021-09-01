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
          <img
            src="https://cdn0.iconfinder.com/data/icons/thin-line-color-2/21/23-512.png"
            style={{ height: 24, width: 24, border: "none" }}
          ></img>
          <span>Photo</span>
        </button>
        <button>
          <img
            src="https://www.seekpng.com/png/detail/10-105240_video-whatsapp-whatsapp-video-call-icon.png"
            style={{ height: 24, width: 24, border: "none" }}
          ></img>
          <span>Video</span>
        </button>
        <button>
          <img
            src="https://www.kindpng.com/picc/m/73-732949_empty-house-insurance-calendar-icon-transparent-transparent-background.png"
            style={{ height: 24, width: 24, border: "none" }}
          ></img>
          <span>Event</span>
        </button>
        <button>
          <img
            src="https://spng.subpng.com/20210307/tq/transparent-article-icon-blog-icon-web-design-icon-604592bd4c45e7.3724763516151722853124.jpg"
            style={{ height: 24, width: 24, border: "none" }}
          ></img>
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
  margin-bottom: 8px;
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
  margin: 0 0 8px;
  background-color: white;
`;

export default Main;

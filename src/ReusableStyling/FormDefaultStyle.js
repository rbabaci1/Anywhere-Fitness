import styled from 'styled-components';

export const FormDefaultStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 344px;
    font-size: 22px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.36px;
    color: #f7f7f7;

    @media only screen and (min-width: 501px) {
      font-size: 25px !important;
      width: 90%;
      line-height: 30px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 330px;
    margin-top: 30px;
    @media only screen and (min-width: 500px) {
      width: 90%;
      max-width: 700px;
    }

    label {
      display: flex;
      flex-direction: column;
      color: #f7f7f7;
      font-size: 17px;
      font-weight: normal;
      line-height: 20px;
      letter-spacing: 0.36px;
      margin-bottom: 13px;
      @media only screen and (min-width: 500px) {
        font-size: 24px;
        margin-bottom: 30px;
      }

      input {
        border-radius: 3px;
        box-sizing: border-box;
        border: 2px solid #787777;
        padding: 10px 6px;
        font-size: 17px;
        background: inherit;
        color: #f7f7f7;
        font-family: Ubuntu;
        @media only screen and (min-width: 500px) {
          margin-top: 5px;
          height: 60px;
          font-size: 22px;
        }
      }
    }
  }
`;

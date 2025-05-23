import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.div`
  max-width: 360px;
  width: 100%;

  > div {
    max-width: 360px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const BarSection = styled.section`
  border: 1px solid ${colors.gray};
  padding: 12px 16px;
  border-radius: 16px;
  margin-top: 16px;

  p {
    font-size: 15px;
    margin-bottom: 12px;
  }

  button {
    max-width: 136px;
  }
`

export const TitleSection = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
`

export const Trend = styled.div`
  padding: 8px 0;

  h5 {
    font-size: 15px;
  }

  span {
    font-size: 13px;
    color: ${colors.darkGray};
  }
`

export const ProfileList = styled.ul`
  max-height: 240px;
  overflow-y: auto;
  padding-right: 4px;
`

export const Profile = styled.li`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }

  button {
    width: 80px;
    border: none;
  }
`

import superagent from "superagent";
import { BASE_API } from "../../constants/index";

// =====================================================
// Book API
// =====================================================

// 도서 목록 조회
export const getBookList = async (params) => {
  try {
    const response = await superagent.get(`${BASE_API}/book/getBookList`).query(params);
    return response.body;
  } catch (error) {
    console.error("Error fetching book list:", error);
    throw error;
  }
};

// 도서 상세 조회
export const getBookDetail = async (bookSeq) => {
  try {
    const response = await superagent
      .get(`${BASE_API}/book/getBookDetail`)
      .query({ bookSeq });
    return response.body;
  } catch (error) {
    console.error("Error fetching book detail:", error);
    throw error;
  }
};

// 도서 등록
export const insertBook = async (data) => {
  try {
    const response = await superagent.post(`${BASE_API}/book/insertBook`).send(data);
    return response.body;
  } catch (error) {
    console.error("Error inserting book:", error);
    throw error;
  }
};

// 도서 수정
export const updateBook = async (data) => {
  try {
    const response = await superagent.post(`${BASE_API}/book/updateBook`).send(data);
    return response.body;
  } catch (error) {
    console.error("Error updating book:", error);
    throw error;
  }
};

// 도서 삭제
export const deleteBook = async (data) => {
  try {
    const response = await superagent.post(`${BASE_API}/book/deleteBook`).send(data);
    return response.body;
  } catch (error) {
    console.error("Error deleting book:", error);
    throw error;
  }
};

// 추천 도서 목록 조회
export const getRecommendBookList = async (params) => {
  try {
    const response = await superagent
      .get(`${BASE_API}/book/getRecommendBookList`)
      .query(params);
    return response.body;
  } catch (error) {
    console.error("Error fetching recommend book list:", error);
    throw error;
  }
};

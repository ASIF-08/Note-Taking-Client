import axios from "axios";
import config from "@/config";

const createNote = async (noteData) => {
    const response = await axios.post(`${config.BASE_URL}/api/notes/createnote`, noteData);
    return response.data;
};

const getNotes = async () => {
    const response = await axios.get(`${config.BASE_URL}/api/notes/getnotes`);
    return response.data;
};

const getNoteById = async (id) => {
    const response = await axios.get(`${config.BASE_URL}/api/notes/getnote/${id}`);
    return response.data;
};

const starNote = async (id) => {
    await axios.patch(`${config.BASE_URL}/api/notes/starnote/${id}`);
};

const getStaredNotes = async () => {
    const response = await axios.get(`${config.BASE_URL}/api/notes/getstarednotes`);
    return response.data;
};

const updateNote = async (noteData) => {
    await axios.patch(`${config.BASE_URL}/api/notes/updatenote/${noteData._id}`, noteData);
};

const deleteNote= async (id) => {
    await axios.delete(`${config.BASE_URL}/api/notes/deletenote/${id}`);
};

export default {
    createNote,
    getNotes,
    getNoteById,
    starNote,
    getStaredNotes,
    updateNote,
    deleteNote
};
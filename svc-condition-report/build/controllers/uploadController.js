"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUpload = void 0;
const uploadService_1 = require("../services/uploadService");
const fs_1 = __importDefault(require("fs"));
async function postUpload(req, res) {
    try {
        const { file } = req;
        if (!file) {
            res.send('No file uploaded');
            throw new Error('No file uploaded');
        }
        const conditions = await (0, uploadService_1.findConditionsFromReport)(file);
        fs_1.default.unlink(file.path, (err) => {
            if (err) {
                console.error(`Failed to delete file: ${err}`);
            }
            else {
                console.log('File deleted successfully');
            }
        });
        console.log('Report processed successfully');
        res.json(conditions);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while uploading the file');
    }
}
exports.postUpload = postUpload;

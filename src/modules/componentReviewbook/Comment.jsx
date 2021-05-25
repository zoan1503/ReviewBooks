import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withTranslate } from 'react-redux-multilingual';
// import Swal from 'sweetalert2'
// import { ContentMaker, DialogModal, ApiImage } from '../../index';
import { getStorage } from '../../config';
import moment from 'moment';
// import { AuthActions } from '../../../modules/auth/redux/actions';
import parse from 'html-react-parser';
import ContentMaker from './ContentMaker'
im

export default class Comment extends Component {
    constructor(props) {
        var idUser = getStorage("userId");
        super(props);
        this.state = {
            editComment: '',
            currentUser: idUser,
            showChildComment: [],
            editChildComment: '',
            showfile: [],
            deleteFile: '',
            comment: {
                creator: idUser,
                description: '',
                files: [],
                descriptionDefault: ""
            },
            newComment: {
                description: '',
                descriptionDefault: ""
            },
            childComment: {
            },
            newCommentEdited: {
                creator: idUser,
                description: "",
                files: [],
                descriptionDefault: ""
            },
            newChildCommentEdited: {
                creator: idUser,
                description: "",
                files: [],
                descriptionDefault: ""
            }
        }
        this.newComment = [];
        this.newChildComment = []
    }

    handleEditTaskComment = (id) => {

        this.setState(state => {
            return {
                ...state,
                editTaskComment: id
            }
        })
    }

    handleShowChildComment = async (id) => {
        let a;
        if (this.state.showChildComment.some(obj => obj === id)) {
            a = this.state.showChildComment.filter(x => x !== id);
            this.setState(state => {
                return {
                    ...state,
                    showChildComment: a
                }
            })
        } else {
            this.setState(state => {
                return {
                    ...state,
                    showChildComment: [...this.state.showChildComment, id]
                }
            })
        }
        // var showChildComment = this.state.showChildComment;
        // if (showChildComment === id) {
        //     await this.setState(state => {
        //         return {
        //             ...state,
        //             showChildComment: ""
        //         }
        //     })
        // } else {
        //     await this.setState(state => {
        //         return {
        //             ...state,
        //             showChildComment: id
        //         }
        //     })
        // }

    }

    handleShowFile = (id) => {
        var a
        if (this.state.showfile.some(obj => obj === id)) {
            a = this.state.showfile.filter(x => x !== id);
            this.setState(state => {
                return {
                    ...state,
                    showfile: a
                }
            })
        } else {
            this.setState(state => {
                return {
                    ...state,
                    showfile: [...this.state.showfile, id]
                }
            })
        }
    }


    handleEditComment = (comment) => {
        this.setState(state => {
            return {
                ...state,
                editComment: comment._id,
                newCommentEdited: {
                    ...state.newCommentEdited,
                    descriptionDefault: comment.description
                }
            }
        })
    }

    handleEditChildComment = (childComment) => {
        this.setState(state => {
            return {
                ...state,
                editChildComment: childComment._id,
                newChildCommentEdited: {
                    ...state.newChildCommentEdited,
                    descriptionDefault: childComment.description
                }
            }
        })
    }
    onFilesChange = (files) => {
        this.setState((state) => {
            return {
                ...state,
                comment: {
                    ...state.comment,
                    files: files,
                }
            }
        })
    }
    onCommentFilesChange = (files, commentId) => {
        this.setState((state) => {
            state.childComment[`${commentId}`] = {
                ...state.childComment[`${commentId}`],
                files: files
            }
            return {
                ...state,
            }
        })
    }
    onFilesError = (error, file) => {
    }


    editComment = async (e, description, commentId, dataId) => {
        e.preventDefault()
        let { newCommentEdited } = this.state;
        let data = new FormData();
        newCommentEdited.files.forEach(x => {
            data.append("files", x)
        })
        data.append("creator", newCommentEdited.creator);
        data.append("type", "edit")
        if (newCommentEdited.description === "") {
            data.append("description", description)
        } else {
            data.append("description", newCommentEdited.description)
        }
        if (newCommentEdited.description) {
            this.props.editComment(dataId, commentId, data, this.props.type)
        }
        if (newCommentEdited.description || newCommentEdited.files) {
            this.props.editComment(dataId, commentId, data, this.props.type);
        }
        await this.setState(state => {
            return {
                ...state,
                editComment: "",
                newCommentEdited: {
                    ...state.newCommentEdited,
                    files: [],
                    description: "",
                    descriptionDefault: null
                }
            }
        })
    }
    editChildComment = async (e, description, childCommentId, commentId, dataId) => {
        e.preventDefault();
        let { newChildCommentEdited } = this.state;
        let data = new FormData();
        newChildCommentEdited.files.forEach(x => {
            data.append("files", x)
        })
        if (newChildCommentEdited.description === "") {
            data.append("description", description)
        } else {
            data.append("description", newChildCommentEdited.description)
        }
        data.append("creator", newChildCommentEdited.creator)
        if (newChildCommentEdited.description || newChildCommentEdited.files) {
            this.props.editChildComment(dataId, commentId, childCommentId, data, this.props.type);
        }
        this.setState(state => {
            return {
                ...state,
                newChildCommentEdited: {
                    ...state.newChildCommentEdited,
                    description: "",
                    files: [],
                    descriptionDefault: ''
                },
                editChildComment: ""
            }
        })
    }
    submitComment = async (dataId) => {
        var { comment } = this.state;
        const data = new FormData();
        data.append("creator", comment.creator);
        data.append("description", comment.description);
        this.props.currentTask && data.append("currentTask", this.props.currentTask)
        comment.files && comment.files.forEach(x => {
            data.append("files", x);
        })
        if (comment.creator && comment.description) {
            this.props.createComment(dataId, data, this.props.type);
        }
        // Reset state cho việc thêm mới action
        await this.setState(state => {
            return {
                ...state,
                comment: {
                    ...state.comment,
                    description: "",
                    files: [],
                    descriptionDefault: ''
                },
            }
        })
    }
    submitChildComment = async (dataId, commentId) => {
        var { childComment } = this.state;
        const data = new FormData();
        data.append("creator", childComment[`${commentId}`].creator);
        data.append("description", childComment[`${commentId}`].description);
        childComment[`${commentId}`].files && childComment[`${commentId}`].files.forEach(x => {
            data.append("files", x);
        })
        if (childComment[`${commentId}`].creator && childComment[`${commentId}`].description) {
            this.props.createChildComment(dataId, commentId, data, this.props.type);
        }
        // Reset state cho việc thêm mới comment
        this.setState(state => {
            state.childComment[`${commentId}`] = {
                description: "",
                files: [],
                descriptionDefault: ''
            }
            return {
                ...state,
            }
        })
    }
    requestDownloadFile = (e, path, fileName) => {
        e.preventDefault()
        this.props.downloadFile(path, fileName)
    }
    handleDeleteFile = async (fileId, fileName, childCommentId, commentId, dataId, type) => {
        // let { translate } = this.props
        // Swal.fire({
        //     html: `<div style="max-width: 100%; max-height: 100%" >${translate("task.task_perform.question_delete_file")} ${fileName} ? <div>`,
        //     showCancelButton: true,
        //     cancelButtonText: `Hủy bỏ`,
        //     confirmButtonText: `Đồng ý`,
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         this.save(dataId)
        //     }
        // })
        await this.setState(state => {
            return {
                ...state,
                deleteFile: {
                    fileId: fileId,
                    commentId: commentId,
                    fileName: fileName,
                    type: type,
                    dataId: dataId,
                    childCommentId: childCommentId
                }
            }
        });
    }

    onEditCommentFilesChange = (files) => {
        this.setState(state => {
            return {
                ...state,
                newCommentEdited: {
                    ...state.newCommentEdited,
                    files: files,
                }
            }
        })
    }

    onEditFileChildComment = (files) => {
        this.setState(state => {
            return {
                ...state,
                newChildCommentEdited: {
                    ...state.newChildCommentEdited,
                    files: files,
                }
            }
        })
    }
    isImage = (src) => {
        let string = src.split(".")
        let image = ['jpg', 'jpeg', 'png', 'tiff', 'gif']
        if (image.indexOf(string[string.length - 1]) !== -1) {
            return true;
        } else {
            return false;
        }
    }

    save = () => {
        let { deleteFile } = this.state
        if (deleteFile.type === "comment") {
            this.props.deleteFileComment(deleteFile.fileId, deleteFile.commentId, deleteFile.dataId)
        } else if (deleteFile.type === "childComment") {
            this.props.deleteFileChildComment(deleteFile.fileId, deleteFile.childCommentId, deleteFile.commentId, deleteFile.dataId)
        }
    }
    render() {
        const { editComment, editChildComment, showChildComment, currentUser, newCommentEdited, newChildCommentEdited, childComment, showfile } = this.state
        // const { auth, translate } = this.props
        const { data } = this.props;
        let bookInfo = [
            {
                "id_book": 1,
                "book_title": "SA MÔN KHÔNG HẢI THẾT YẾN BẦY QUỶ ĐẠI ĐƯỜNG",
                "author": "Yumemakura Baku",
                "description": "Nhà sư trẻ tuổi Không Hải, cùng người bạn thân Quất Dật Thế, từ Nhật Bản xa xôi vượt biển tới Đại Đường với tư cách sứ thần sang du học. Vào thời đại đó, Trường An, kinh đô của nhà Đại Đường là nơi nổi tiếng thịnh vượng phồn hoa, tập trung nhiều sắc dân từ khắp nơi đổ về. Như bóng tối luôn song hành cùng ánh sáng, nhiều loài yêu ma quỷ quái cũng bị thu hút về đây. Một con yêu quái mèo đã ám dinh cơ của viên chức dịch họ Lưu và đưa ra lời tiên tri về cái chết của hoàng đế. Tự tin vào vốn kiến thức uyên bác cùng tài ứng biến phi thường của bản thân, Không Hải đã dẫn Quất Dật Thế đến nhà họ Lưu để đương đầu với yêu mèo. Song họ không ngờ, mình đã vô tình dính líu vào một sự kiện lớn làm rung chuyển nhà Đường. Kiệt tác tiểu thuyết truyền kỳ Nhật Bản lấy bối cảnh Trung Hoa mở ra từ đây.",
                "image_url": "http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2020/1/7/SQHEFH86.jpg",
                "review_id": 1,
                "content_review": "Sách non",
                "id_user": 1
            },
            {
                "id_book": 1,
                "book_title": "SA MÔN KHÔNG HẢI THẾT YẾN BẦY QUỶ ĐẠI ĐƯỜNG",
                "author": "Yumemakura Baku",
                "description": "Nhà sư trẻ tuổi Không Hải, cùng người bạn thân Quất Dật Thế, từ Nhật Bản xa xôi vượt biển tới Đại Đường với tư cách sứ thần sang du học. Vào thời đại đó, Trường An, kinh đô của nhà Đại Đường là nơi nổi tiếng thịnh vượng phồn hoa, tập trung nhiều sắc dân từ khắp nơi đổ về. Như bóng tối luôn song hành cùng ánh sáng, nhiều loài yêu ma quỷ quái cũng bị thu hút về đây. Một con yêu quái mèo đã ám dinh cơ của viên chức dịch họ Lưu và đưa ra lời tiên tri về cái chết của hoàng đế. Tự tin vào vốn kiến thức uyên bác cùng tài ứng biến phi thường của bản thân, Không Hải đã dẫn Quất Dật Thế đến nhà họ Lưu để đương đầu với yêu mèo. Song họ không ngờ, mình đã vô tình dính líu vào một sự kiện lớn làm rung chuyển nhà Đường. Kiệt tác tiểu thuyết truyền kỳ Nhật Bản lấy bối cảnh Trung Hoa mở ra từ đây.",
                "image_url": "http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2020/1/7/SQHEFH86.jpg",
                "review_id": 9,
                "content_review": "SÁch ngáo vl",
                "id_user": 6
            }
        ]
        return (
            <React.Fragment>
                { bookInfo && bookInfo ?
                    //Hiển thị bình luận của công việc
                    bookInfo.map(item => {
                        return (
                            <div key={item._id}>
                                <img className="user-img-level1" src={item.image_url} alt="User Image" />
                                 {/* {editComment !== item._id && // Khi đang edit thì ẩn đi */}
                                    <React.Fragment>
                                        <div className="content-level1">
                                            <a style={{ cursor: "pointer" }}>{item.creator?.name} </a>
                                            {item.description.split('\n').map((item, idx) => {
                                                return (
                                                    <span key={item._id}>
                                                        {parse(item)}
                                                    </span>
                                                );
                                            })
                                            }
                                            {item.creator?._id === currentUser &&
                                                <div className="btn-group pull-right">
                                                    <span data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-h"></i>
                                                    </span>
                                                    <ul className="dropdown-menu">
                                                        <li><a style={{ cursor: "pointer" }} onClick={() => this.handleEditComment(item)} >Sửa</a></li>
                                                        <li><a style={{ cursor: "pointer" }} onClick={() => this.props.deleteComment(data._id, item._id, this.props.type)} >Xóa</a></li>
                                                    </ul>
                                                </div>}
                                        </div>
                                        <ul className="list-inline tool-level1">
                                            <li><span className="text-sm">{moment(item.createdAt).fromNow()}</span></li>

                                            <li><a style={{ cursor: "pointer" }} className="link-black text-sm" onClick={() => this.handleShowChildComment(item._id)}><i className="fa fa-comments-o margin-r-5"></i> Bình luận  &nbsp;</a></li>
                                        </ul>
                                    </React.Fragment>
                            
                            </div>
                        )
                    }) : null
                }
                {/* <img className="user-img-level1" src={item.image_url} alt="User Image" /> */}
                
                {/* <ContentMaker
                    idQuill={`add-comment`}
                    inputCssClass="text-input-level1" controlCssClass="tool-level1"
                    onFilesChange={this.onFilesChange}
                    onFilesError={this.onFilesError}
                    files={this.state.comment.files}
                    text={this.state.comment.descriptionDefault}
                    placeholder={translate('task.task_perform.enter_comment')}
                    submitButtonText={translate('task.task_perform.create_comment')}
                    onTextChange={(value, imgs) => {
                        this.setState(state => {
                            return { ...state, comment: { ...state.comment, description: value, descriptionDefault: null } }
                        })
                    }}
                    onSubmit={(e) => this.submitComment(data?._id)}
                /> */}
            </React.Fragment>
        );
    }
}

// function mapState(state) {
//     const { auth } = state;
//     return { auth };
// }
// const actionCreators = {
//     downloadFile: AuthActions.downloadFile,
// };
// const comment = connect(mapState, actionCreators)(withTranslate(Comment));

// export { comment as Comment }
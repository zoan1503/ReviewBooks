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
        // Reset state cho vi???c th??m m???i action
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
        // Reset state cho vi???c th??m m???i comment
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
        //     cancelButtonText: `H???y b???`,
        //     confirmButtonText: `?????ng ??`,
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
                "book_title": "SA M??N KH??NG H???I TH???T Y???N B???Y QU??? ?????I ???????NG",
                "author": "Yumemakura Baku",
                "description": "Nh?? s?? tr??? tu???i Kh??ng H???i, c??ng ng?????i b???n th??n Qu???t D???t Th???, t??? Nh???t B???n xa x??i v?????t bi???n t???i ?????i ???????ng v???i t?? c??ch s??? th???n sang du h???c. V??o th???i ?????i ????, Tr?????ng An, kinh ???? c???a nh?? ?????i ???????ng l?? n??i n???i ti???ng th???nh v?????ng ph???n hoa, t???p trung nhi???u s???c d??n t??? kh???p n??i ????? v???. Nh?? b??ng t???i lu??n song h??nh c??ng ??nh s??ng, nhi???u lo??i y??u ma qu??? qu??i c??ng b??? thu h??t v??? ????y. M???t con y??u qu??i m??o ???? ??m dinh c?? c???a vi??n ch???c d???ch h??? L??u v?? ????a ra l???i ti??n tri v??? c??i ch???t c???a ho??ng ?????. T??? tin v??o v???n ki???n th???c uy??n b??c c??ng t??i ???ng bi???n phi th?????ng c???a b???n th??n, Kh??ng H???i ???? d???n Qu???t D???t Th??? ?????n nh?? h??? L??u ????? ??????ng ?????u v???i y??u m??o. Song h??? kh??ng ng???, m??nh ???? v?? t??nh d??nh l??u v??o m???t s??? ki???n l???n l??m rung chuy???n nh?? ???????ng. Ki???t t??c ti???u thuy???t truy???n k??? Nh???t B???n l???y b???i c???nh Trung Hoa m??? ra t??? ????y.",
                "image_url": "http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2020/1/7/SQHEFH86.jpg",
                "review_id": 1,
                "content_review": "S??ch non",
                "id_user": 1
            },
            {
                "id_book": 1,
                "book_title": "SA M??N KH??NG H???I TH???T Y???N B???Y QU??? ?????I ???????NG",
                "author": "Yumemakura Baku",
                "description": "Nh?? s?? tr??? tu???i Kh??ng H???i, c??ng ng?????i b???n th??n Qu???t D???t Th???, t??? Nh???t B???n xa x??i v?????t bi???n t???i ?????i ???????ng v???i t?? c??ch s??? th???n sang du h???c. V??o th???i ?????i ????, Tr?????ng An, kinh ???? c???a nh?? ?????i ???????ng l?? n??i n???i ti???ng th???nh v?????ng ph???n hoa, t???p trung nhi???u s???c d??n t??? kh???p n??i ????? v???. Nh?? b??ng t???i lu??n song h??nh c??ng ??nh s??ng, nhi???u lo??i y??u ma qu??? qu??i c??ng b??? thu h??t v??? ????y. M???t con y??u qu??i m??o ???? ??m dinh c?? c???a vi??n ch???c d???ch h??? L??u v?? ????a ra l???i ti??n tri v??? c??i ch???t c???a ho??ng ?????. T??? tin v??o v???n ki???n th???c uy??n b??c c??ng t??i ???ng bi???n phi th?????ng c???a b???n th??n, Kh??ng H???i ???? d???n Qu???t D???t Th??? ?????n nh?? h??? L??u ????? ??????ng ?????u v???i y??u m??o. Song h??? kh??ng ng???, m??nh ???? v?? t??nh d??nh l??u v??o m???t s??? ki???n l???n l??m rung chuy???n nh?? ???????ng. Ki???t t??c ti???u thuy???t truy???n k??? Nh???t B???n l???y b???i c???nh Trung Hoa m??? ra t??? ????y.",
                "image_url": "http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2020/1/7/SQHEFH86.jpg",
                "review_id": 9,
                "content_review": "S??ch ng??o vl",
                "id_user": 6
            }
        ]
        return (
            <React.Fragment>
                { bookInfo && bookInfo ?
                    //Hi???n th??? b??nh lu???n c???a c??ng vi???c
                    bookInfo.map(item => {
                        return (
                            <div key={item._id}>
                                <img className="user-img-level1" src={item.image_url} alt="User Image" />
                                {/* {editComment !== item._id && // Khi ??ang edit th?? ???n ??i */}
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
                                                    <li><a style={{ cursor: "pointer" }} onClick={() => this.handleEditComment(item)} >S???a</a></li>
                                                    <li><a style={{ cursor: "pointer" }} onClick={() => this.props.deleteComment(data._id, item._id, this.props.type)} >X??a</a></li>
                                                </ul>
                                            </div>}
                                    </div>
                                    <ul className="list-inline tool-level1">
                                        <li><span className="text-sm">{moment(item.createdAt).fromNow()}</span></li>

                                        <li><a style={{ cursor: "pointer" }} className="link-black text-sm" onClick={() => this.handleShowChildComment(item._id)}><i className="fa fa-comments-o margin-r-5"></i> B??nh lu???n  &nbsp;</a></li>
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
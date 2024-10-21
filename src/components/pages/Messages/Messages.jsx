export default function Messages() {
return (
    <div className="container-fluid vh-100">
        <div className="row h-100">
            <div className="col-12 h-100">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Messages</h1>
                    </div>
                </div>
                <div className="row h-100">
                    <div className="col-12 col-md-4 h-100">
                        <div className="list-group h-100">
                            <a
                                href="#"
                                className="list-group-item list-group-item-action active d-flex align-items-center"
                            >
                                <img
                                    src="seller1.jpg"
                                    alt="Seller 1"
                                    className="rounded-circle mr-3"
                                    style={{ width: "40px", height: "40px" }}
                                />
                                Seller 1
                            </a>
                            <a
                                href="#"
                                className="list-group-item list-group-item-action d-flex align-items-center"
                            >
                                <img
                                    src="seller2.jpg"
                                    alt="Seller 2"
                                    className="rounded-circle mr-3"
                                    style={{ width: "40px", height: "40px" }}
                                />
                                Seller 2
                            </a>
                            <a
                                href="#"
                                className="list-group-item list-group-item-action d-flex align-items-center"
                            >
                                <img
                                    src="seller3.jpg"
                                    alt="Seller 3"
                                    className="rounded-circle mr-3"
                                    style={{ width: "40px", height: "40px" }}
                                />
                                Seller 3
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 h-100">
                        <div className="card h-75">
                            <div className="card-header d-flex align-items-center">
                                <img
                                    src="seller1.jpg"
                                    alt="Seller 1"
                                    className="rounded-circle mr-3"
                                    style={{ width: "40px", height: "40px" }}
                                />
                                Chat with Seller 1
                            </div>
                            <div className="card-body overflow-auto" style={{ flex: 1 }}>
                                <div className="chat-message">
                                    <div className="message seller-message bg-light p-2 rounded mb-2">
                                        <strong>Seller 1:</strong> Hello, how can I help you?
                                    </div>
                                    <div className="message user-message bg-primary text-white p-2 rounded mb-2">
                                        <strong>You:</strong> I am interested in your property.
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Type a message"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

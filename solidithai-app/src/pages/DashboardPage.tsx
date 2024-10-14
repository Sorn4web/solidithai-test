import React, { useState, ChangeEvent } from "react";
import { mockUsers } from "../data/users";
import { User } from "../types/User";
import Modal from "../components/common/Modal";
import Input from "../components/common/Input";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoSearch, IoFilter } from "react-icons/io5";

const rowsPerPage = 10;

export default function DashboardPage() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);

  const [showName, setShowName] = useState<boolean>(true);
  const [showPosition, setShowPosition] = useState<boolean>(true);
  const [showDepartment, setShowDepartment] = useState<boolean>(true);
  const [showContact, setShowContact] = useState<boolean>(true);
  const [showDetails, setShowDetails] = useState<boolean>(true);

  const handleShowDetails = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const filteredUsers = mockUsers.filter((user) => {
    return (
      user.firstName.toLowerCase().includes(searchQuery) ||
      user.lastName.toLowerCase().includes(searchQuery) ||
      user.nickname.toLowerCase().includes(searchQuery) ||
      user.position.toLowerCase().includes(searchQuery) ||
      user.department.toLowerCase().includes(searchQuery) ||
      user.email.toLowerCase().includes(searchQuery) ||
      user.phone.toLowerCase().includes(searchQuery)
    );
  });

  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalFilteredPages = Math.ceil(filteredUsers.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalFilteredPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleOpenFilterModal = () => {
    setShowFilterModal(true);
  };

  const handleCloseFilterModal = () => {
    setShowFilterModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 w-full">
      <h2 className="text-2xl font-bold w-full text-left">User Directory</h2>

      <div className="w-full text-left">
        <Input
          type="text"
          placeholder="Search by name, position, department, email, phone..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="my-4 w-full max-w-lg"
          leftIcon={<IoSearch />}
          rightIcon={
            <IoFilter
              className="hover:bg-base-200 w-8 h-8 rounded-lg cursor-pointer p-2"
              onClick={handleOpenFilterModal} 
            />
          }
        />
      </div>

      <div className="w-full">
        <div className="overflow-x-auto">
          {currentUsers.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  {showName && <th>Name</th>}
                  {showPosition && <th>Position</th>}
                  {showDepartment && <th>Department</th>}
                  {showContact && <th>Contact</th>}
                  {showDetails && <th></th>}
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user?.id}>
                    {showName && (
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={`https://ui-avatars.com/api/?name=${user?.firstName}+${user?.lastName}`}
                                alt={user?.firstName}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">
                              {user?.firstName} {user?.lastName}
                            </div>
                            <div className="text-sm opacity-50">
                              {user?.nickname}
                            </div>
                          </div>
                        </div>
                      </td>
                    )}
                    {showPosition && <td>{user?.position}</td>}
                    {showDepartment && (
                      <td>
                        <span className="badge badge-primary badge-sm">
                          {user?.department}
                        </span>
                      </td>
                    )}
                    {showContact && (
                      <td>
                        <div className="flex flex-col items-start">
                          <div className="flex items-center gap-2">
                            <MdEmail /> {user?.email}
                          </div>
                          <div className="flex items-center gap-2">
                            <FaPhone /> {user?.phone}
                          </div>
                        </div>
                      </td>
                    )}
                    {showDetails && (
                      <td>
                        <button
                          className="btn btn-ghost btn-xs"
                          onClick={() => handleShowDetails(user)}
                        >
                          details
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  {showName && <th>Name</th>}
                  {showPosition && <th>Position</th>}
                  {showDepartment && <th>Department</th>}
                  {showContact && <th>Contact</th>}
                  {showDetails && <th></th>}
                </tr>
              </tfoot>
            </table>
          ) : (
            <p className="text-center text-gray-500">No users found.</p>
          )}
        </div>

        <div className="flex justify-end items-center space-x-4 mt-4">
          <span className="text-sm">
            Page {currentPage} of {totalFilteredPages}
          </span>
          <button
            className="btn btn-xs"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalFilteredPages }, (_, index) => (
            <button
              key={index}
              className={`btn btn-xs ${
                currentPage === index + 1 ? "btn-primary" : ""
              }`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="btn btn-xs"
            onClick={handleNextPage}
            disabled={currentPage === totalFilteredPages}
          >
            Next
          </button>
        </div>
      </div>

      <Modal isOpen={showFilterModal} onClose={handleCloseFilterModal}>
        <h3 className="font-bold text-lg mb-4">Select Columns to Show</h3>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Name</span>
            <input
              type="checkbox"
              checked={showName}
              onChange={() => setShowName(!showName)}
              className="checkbox"
            />
          </label>
          <label className="cursor-pointer label">
            <span className="label-text">Position</span>
            <input
              type="checkbox"
              checked={showPosition}
              onChange={() => setShowPosition(!showPosition)}
              className="checkbox"
            />
          </label>
          <label className="cursor-pointer label">
            <span className="label-text">Department</span>
            <input
              type="checkbox"
              checked={showDepartment}
              onChange={() => setShowDepartment(!showDepartment)}
              className="checkbox"
            />
          </label>
          <label className="cursor-pointer label">
            <span className="label-text">Contact</span>
            <input
              type="checkbox"
              checked={showContact}
              onChange={() => setShowContact(!showContact)}
              className="checkbox"
            />
          </label>
          <label className="cursor-pointer label">
            <span className="label-text">Details</span>
            <input
              type="checkbox"
              checked={showDetails}
              onChange={() => setShowDetails(!showDetails)}
              className="checkbox"
            />
          </label>
        </div>
      </Modal>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedUser && (
          <>
            <div className="flex justify-center mb-4">
              <div className="avatar">
                <div className="mask mask-squircle w-24 h-24">
                  <img
                    src={`https://ui-avatars.com/api/?name=${selectedUser?.firstName}+${selectedUser?.lastName}`}
                    alt={selectedUser?.firstName}
                  />
                </div>
              </div>
            </div>
            <h3 className="font-bold text-lg text-center mb-4">
              {selectedUser?.firstName} {selectedUser?.lastName} (
              {selectedUser?.nickname})
            </h3>
            <a href={`mailto:${selectedUser?.email}`}>
              <strong>Email: </strong>
              <span className="text-primary">{selectedUser?.email}</span>
            </a>
            <br />
            <a href={`tel:${selectedUser?.phone}`}>
              <strong>Phone: </strong>
              <span className="text-primary">{selectedUser?.phone}</span>
            </a>
            <p>
              <strong>Department:</strong> {selectedUser?.department}
            </p>
            <p>
              <strong>Position:</strong> {selectedUser?.position}
            </p>
            <p>
              <strong>Address:</strong> {selectedUser?.address}
            </p>

            <p className="text-xs text-neutral-500 mt-5">
              Click email or phone to contact user
            </p>
          </>
        )}
      </Modal>
    </div>
  );
}

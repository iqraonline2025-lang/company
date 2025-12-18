import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase-client";
import Modal from "../components/Modal";
import ProjectForm from "../components/ProjectForm";
import CourseForm from "../components/CourseForm";
import TestimonialForm from "../components/TestimonialForm";
import PackageForm from "../components/PackageForm";
import PricingPlanForm from "../components/PricingPlanForm";
import FeaturedProjectForm from "../components/FeaturedProjectForm";
import {
  LogOut,
  User,
  Mail,
  Calendar,
  Settings,
  Edit,
  Trash2,
  Plus,
} from "lucide-react";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [courses, setCourses] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [packages, setPackages] = useState([]);
  const [pricingPlans, setPricingPlans] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [modalStates, setModalStates] = useState({
    projects: { isOpen: false, editing: null },
    courses: { isOpen: false, editing: null },
    testimonials: { isOpen: false, editing: null },
    packages: { isOpen: false, editing: null },
    pricingPlans: { isOpen: false, editing: null },
    featuredProjects: { isOpen: false, editing: null },
  });

  const navigate = useNavigate();

  // ----------------------
  // User Auth & Admin Check
  // ----------------------
  useEffect(() => {
    const getUser = async () => {
      const mockSession = localStorage.getItem("admin_session");
      if (mockSession) {
        try {
          const sessionData = JSON.parse(mockSession);
          if (sessionData.expires_at > Date.now()) {
            setUser(sessionData.user);
            setIsAdmin(true);
            setLoading(false);
            return;
          } else {
            localStorage.removeItem("admin_session");
          }
        } catch (e) {
          localStorage.removeItem("admin_session");
        }
      }

      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        navigate("/login");
        return;
      }

      const adminEmails = ["admin@oryntix.com", "admin@example.com"];
      setUser(user);
      setIsAdmin(adminEmails.includes(user.email));
      setLoading(false);
    };

    getUser();
  }, [navigate]);

  // ----------------------
  // Fetch Dashboard Data
  // ----------------------
  const fetchDashboardData = async () => {
    if (!isAdmin) return;

    try {
      const { data: contactsData } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(5);
      setContacts(contactsData || []);

      const { data: projectsData } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(10);
      setProjects(projectsData || []);

      const { data: coursesData } = await supabase.from("courses").select("*");
      setCourses(coursesData || []);

      const { data: testimonialsData } = await supabase
        .from("testimonials")
        .select("*");
      setTestimonials(testimonialsData || []);

      const { data: packagesData } = await supabase
        .from("packages")
        .select("*");
      setPackages(packagesData || []);

      const { data: pricingPlansData } = await supabase
        .from("pricing-plans")
        .select("*");
      setPricingPlans(pricingPlansData || []);

      const { data: featuredProjectsData } = await supabase
        .from("featured-projects")
        .select("*");
      setFeaturedProjects(featuredProjectsData || []);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [isAdmin]);

  // ----------------------
  // Logout
  // ----------------------
  const handleLogout = async () => {
    localStorage.removeItem("admin_session");
    await supabase.auth.signOut();
    navigate("/login");
  };

  // ----------------------
  // Modal Management
  // ----------------------
  const openModal = (type, item = null) => {
    setModalStates((prev) => ({
      ...prev,
      [type]: { isOpen: true, editing: item },
    }));
  };

  const closeModal = (type) => {
    setModalStates((prev) => ({
      ...prev,
      [type]: { isOpen: false, editing: null },
    }));
  };

  // ----------------------
  // CRUD Functions
  // ----------------------
  const handleDelete = async (table, id) => {
    if (!confirm("Are you sure you want to delete this item?")) return;

    try {
      const { error } = await supabase.from(table).delete().eq("id", id);
      if (error) throw error;

      await fetchDashboardData();
    } catch (error) {
      console.error(`Error deleting from ${table}:`, error);
      alert(`Error deleting item: ${error.message}`);
    }
  };

  const refreshData = async () => {
    await fetchDashboardData();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div
          className="max-w-md w-full bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10 text-center"
          style={{
            background: "linear-gradient(135deg, #1A1A2E 0%, #100C1F 100%)",
          }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Access Denied</h2>
          <p className="text-gray-400 mb-6">
            You don't have permission to access the admin dashboard.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  // ----------------------
  // Render
  // ----------------------
  return (
    <div
      className="min-h-screen p-4"
      style={{
        background: "linear-gradient(135deg, #1A1A2E 0%, #100C1F 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <nav className="flex gap-4">
              <button
                onClick={() => navigate("/")}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/services")}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => navigate("/about")}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                About
              </button>
              <button
                onClick={() => navigate("/portfolio")}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => navigate("/quranteaching")}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Quran Teaching
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Contact
              </button>
            </nav>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <LogOut size={20} /> Logout
            </button>
          </div>
        </div>

        {/* Admin Info Card */}
        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
              <User className="text-white" size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Admin Panel</h2>
              <p className="text-gray-400">Manage your application</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="text-red-400" size={20} />
                <span className="text-gray-300 font-medium">Admin Email</span>
              </div>
              <p className="text-white">{user.email}</p>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="text-red-400" size={20} />
                <span className="text-gray-300 font-medium">Last Login</span>
              </div>
              <p className="text-white">{new Date().toLocaleDateString()}</p>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <Settings className="text-red-400" size={20} />
                <span className="text-gray-300 font-medium">Role</span>
              </div>
              <p className="text-white">Administrator</p>
            </div>
          </div>
        </div>

        {/* All Sections Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {[
            {
              title: "Projects",
              data: projects,
              modal: "projects",
              table: "projects",
            },
            {
              title: "Courses",
              data: courses,
              modal: "courses",
              table: "courses",
            },
            {
              title: "Testimonials",
              data: testimonials,
              modal: "testimonials",
              table: "testimonials",
            },
            {
              title: "Packages",
              data: packages,
              modal: "packages",
              table: "packages",
            },
            {
              title: "Pricing Plans",
              data: pricingPlans,
              modal: "pricingPlans",
              table: "pricing-plans",
            },
            {
              title: "Featured Projects",
              data: featuredProjects,
              modal: "featuredProjects",
              table: "featured-projects",
            },
          ].map((section) => (
            <div
              key={section.title}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {section.title}
                </h3>
                <button
                  onClick={() => openModal(section.modal)}
                  className="flex items-center gap-2 px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm"
                >
                  <Plus size={16} /> Add
                </button>
              </div>
              <div className="space-y-3">
                {section.data.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl"
                  >
                    <div>
                      <p className="text-white text-sm font-medium">
                        {item.title || item.name}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {item.category ||
                          item.level ||
                          item.period ||
                          item.featured_order ||
                          item.role}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openModal(section.modal, item)}
                        className="p-1 hover:bg-gray-700 rounded"
                      >
                        <Edit size={14} className="text-blue-400" />
                      </button>
                      <button
                        onClick={() => handleDelete(section.table, item.id)}
                        className="p-1 hover:bg-gray-700 rounded"
                      >
                        <Trash2 size={14} className="text-red-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modals */}
        <Modal
          isOpen={modalStates.projects.isOpen}
          onClose={() => closeModal("projects")}
          title={modalStates.projects.editing ? "Edit Project" : "Add Project"}
        >
          <ProjectForm
            project={modalStates.projects.editing}
            onClose={() => closeModal("projects")}
            onSave={refreshData}
          />
        </Modal>

        <Modal
          isOpen={modalStates.courses.isOpen}
          onClose={() => closeModal("courses")}
          title={modalStates.courses.editing ? "Edit Course" : "Add Course"}
        >
          <CourseForm
            course={modalStates.courses.editing}
            onClose={() => closeModal("courses")}
            onSave={refreshData}
          />
        </Modal>

        <Modal
          isOpen={modalStates.testimonials.isOpen}
          onClose={() => closeModal("testimonials")}
          title={
            modalStates.testimonials.editing
              ? "Edit Testimonial"
              : "Add Testimonial"
          }
        >
          <TestimonialForm
            testimonial={modalStates.testimonials.editing}
            onClose={() => closeModal("testimonials")}
            onSave={refreshData}
          />
        </Modal>

        <Modal
          isOpen={modalStates.packages.isOpen}
          onClose={() => closeModal("packages")}
          title={modalStates.packages.editing ? "Edit Package" : "Add Package"}
        >
          <PackageForm
            pkg={modalStates.packages.editing}
            onClose={() => closeModal("packages")}
            onSave={refreshData}
          />
        </Modal>

        <Modal
          isOpen={modalStates.pricingPlans.isOpen}
          onClose={() => closeModal("pricingPlans")}
          title={
            modalStates.pricingPlans.editing
              ? "Edit Pricing Plan"
              : "Add Pricing Plan"
          }
        >
          <PricingPlanForm
            plan={modalStates.pricingPlans.editing}
            onClose={() => closeModal("pricingPlans")}
            onSave={refreshData}
          />
        </Modal>

        <Modal
          isOpen={modalStates.featuredProjects.isOpen}
          onClose={() => closeModal("featuredProjects")}
          title={
            modalStates.featuredProjects.editing
              ? "Edit Featured Project"
              : "Add Featured Project"
          }
        >
          <FeaturedProjectForm
            project={modalStates.featuredProjects.editing}
            onClose={() => closeModal("featuredProjects")}
            onSave={refreshData}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;

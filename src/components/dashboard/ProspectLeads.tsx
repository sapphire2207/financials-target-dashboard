import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDashboard } from "@/context/DashboardContext";

export default function ProspectLeads() {

  const { dashboardData } = useDashboard();
  const prospects = dashboardData.prospects;

  return (
    <div className="p-4 bg-white rounded-xl shadow-sm h-[263px]">
      <h2 className="text-base font-semibold mb-4">Prospect Leads</h2>

      <div className="space-y-3">
        {prospects.map((prospect, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-[10px] gap-[0.5px] bg-gray-50 rounded-lg"
          >
            <div className="flex items-center">
              <Avatar className="h-9 w-9 mr-3">
                <AvatarImage src={prospect.avatar} alt={prospect.name} />
                <AvatarFallback>{prospect.initials}</AvatarFallback>
              </Avatar>
              <div className="text-sm font-medium">{prospect.name}</div>
            </div>

            <div className="text-sm text-gray-500">
              <span className="text-gray-400">Stage:</span> {prospect.stage}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

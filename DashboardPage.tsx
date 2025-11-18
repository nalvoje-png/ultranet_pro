import React from 'react';
import Card from './components/ui/Card';
import Button from './components/ui/Button';

const DashboardPage: React.FC = () => {
    const referralCode = 'ULTR-AF8C-B2A1';
    const referralLink = `https://ultranet.promo/ref?code=${referralCode}`;

    const mockReferrals = [
        { id: 1, name: 'Ana Silva', date: '15/07/2024', status: 'Aprovada' },
        { id: 2, name: 'Bruno Costa', date: '22/07/2024', status: 'Pendente' },
        { id: 3, name: 'Carla Dias', date: '01/06/2024', status: 'Cancelada' },
        { id: 4, name: 'Daniel Alves', date: '18/07/2024', status: 'Pendente' },
    ];

    const stats = {
        total: mockReferrals.length,
        approved: mockReferrals.filter(r => r.status === 'Aprovada').length,
        pending: mockReferrals.filter(r => r.status === 'Pendente').length,
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert('Copiado para a área de transferência!');
    };
    
    const getStatusChip = (status: string) => {
        switch (status) {
            case 'Aprovada':
                return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Aprovada</span>;
            case 'Pendente':
                return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pendente</span>;
            case 'Cancelada':
                return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Cancelada</span>;
            default:
                return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">{status}</span>;
        }
    }

  return (
    <div className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800">
          Minhas <span className="text-orange-500">Indicações</span>
        </h1>
        
        <div className="max-w-5xl mx-auto space-y-8">
            <Card>
                <h2 className="text-2xl font-bold mb-4">Seu Link de Indicação</h2>
                <p className="text-gray-600 mb-4">Compartilhe este link com seus amigos. Quando eles se cadastrarem através dele, a indicação será automaticamente associada a você.</p>
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between flex-wrap gap-4">
                    <span className="text-gray-800 font-mono break-all">{referralLink}</span>
                    <Button onClick={() => copyToClipboard(referralLink)} className="ml-4 px-4 py-2 text-sm shrink-0">Copiar</Button>
                </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                    <h3 className="text-lg font-semibold text-gray-600">Total de Indicações</h3>
                    <p className="text-4xl font-bold text-teal-500 mt-2">{stats.total}</p>
                </Card>
                 <Card className="text-center">
                    <h3 className="text-lg font-semibold text-gray-600">Indicações Pendentes</h3>
                    <p className="text-4xl font-bold text-yellow-500 mt-2">{stats.pending}</p>
                </Card>
                <Card className="text-center">
                    <h3 className="text-lg font-semibold text-gray-600">Meses Grátis Ganhos</h3>
                    <p className="text-4xl font-bold text-green-500 mt-2">{stats.approved}</p>
                </Card>
            </div>

            <Card>
                <h2 className="text-2xl font-bold mb-4">Histórico de Indicações</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amigo Indicado</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data da Indicação</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockReferrals.map((ref) => (
                                <tr key={ref.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ref.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ref.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{getStatusChip(ref.status)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

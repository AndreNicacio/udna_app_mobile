import { Storage } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';


import { NUTRITIONAL_PROFILE, PROFESSIONAL_RECOMMENDATIONS, GENETIC_TESTS } from '../../constants/reports';
import { useUser } from '../../providers/UserProvider';
import { maskRemoveService } from '../../services/maskService';
import { mapReportsService } from '../../services/reportsService';

import ReportsView from './reports__view';

const ReportsContainer = () => {
  const { navigate } = useNavigation();
  const { user } = useUser();
  const [selectedType, setSelectedType] = useState(0);
  const [reports] = useState([{
    type: NUTRITIONAL_PROFILE,
    list: [],
  }, {
    type: PROFESSIONAL_RECOMMENDATIONS,
    list: [],
  }, {
    type: GENETIC_TESTS,
    list: [],
  }]);
  const [loading, setLoading] = useState(true);
  const username = maskRemoveService(user.cpf);

  const getList = async () => {
    setLoading(true);
    let list = [];
    try {
      list = await Storage.list(`Reports/${username}/Perfil Nutricional`);
      reports[0].list = mapReportsService(list);
      list = await Storage.list(`Reports/${username}/Recomendações Profissionais`);
      reports[1].list = mapReportsService(list);
      list = await Storage.list(`Reports/${username}/Exames Genéticos`);
      reports[2].list = mapReportsService(list);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const goToReport = async (report) => {
    setLoading(true);
    try {
      const url = await Storage.get(`Reports/${username}/${reports[selectedType].type}/${report.name}`);
      setLoading(false);
      navigate('ReportInfo', { source: url });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <ReportsView
      loading={loading}
      selectedType={selectedType}
      reports={reports}
      onChangeType={setSelectedType}
      onChoiceReport={goToReport}
    />
  );
};

export default ReportsContainer;

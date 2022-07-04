/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { Link, navigate } from 'gatsby';
import { css } from 'styled-components';
import { Field, Input, Label } from '@zendeskgarden/react-forms';
import { Submit } from 'layouts/Root/components/Forms';
import { mediaQuery } from '@zendeskgarden/react-theming';
import RequireEditorAccess from './components/RequireEditorAccess';
import ClientSide from './components/ClientSide';

const PROJECTS = gql`{
  projects {
    id
    name
    description
    created_at
  }
}`;

const CREATE_PROJECT = gql`
  mutation createProject($name: String!, $description: String!) {
    createProject(name: $name, description: $description) {
      errors {
        field
        errors
      }
      project {
        id
        name
        description
        created_at
      }
    }
  }
`;

const ProjectListLayout = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDesc, setProjectDesc] = useState('');

  const { data: projects, loading } = useQuery(PROJECTS);
  const [createProject, { createdProject, creating, error }] = useMutation(CREATE_PROJECT, {
    update: cache => {
      cache.evict({
        id: 'ROOT_QUERY',
        fieldName: 'projects'
      });
    }
  });

  useEffect(() => {
    if (createdProject?.createProject?.project?.id) {
      navigate(`/editor/project/${createdProject.createProject.project.id}/`);
    }
  }, [createdProject]);

  const submitForm = () => {
    if (!projectName || !projectDesc) {
      return false;
    }

    createProject({
      variables: {
        name: projectName,
        description: projectDesc,
      }
    });

    return true;
  };

  return (
    <ClientSide>
      <RequireEditorAccess>
        Project list
        <ul>
          {projects && projects.projects.map(proj => (
            <Link to={`/editor/project/${proj.id}`}>
              <li css="list-style-type: circle;" key={proj.id}>{proj.name} - {proj.description}</li>
            </Link>
          ))}
        </ul>
        <hr/>
        <form
          onSubmit={e => {
            e.preventDefault();
            submitForm();
          }}
        >
          <p>Create new project</p>
          <Field>
            <Label>Name</Label>
            <Input value={projectName} onChange={e => setProjectName(e.target.value)}/>
          </Field>
          <Field>
            <Label>Description</Label>
            <Input value={projectDesc} onChange={e => setProjectDesc(e.target.value)}/>
          </Field>
          <Submit loading={creating}>Create project</Submit>
        </form>
      </RequireEditorAccess>
    </ClientSide>
  );
};

export default ProjectListLayout;
